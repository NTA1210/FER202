import React, { useReducer, useState } from "react";
import { Button, Form, Container, Row, Col, ListGroup } from "react-bootstrap";

// ✅ [Bài 4] Hàm reducer được mở rộng từ bài 3
function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };

    case "EDIT_ITEM": // ✅ [Bài 4] Cho phép chỉnh sửa item
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.name } : item
        ),
      };

    case "SET_SORT": // ✅ [Bài 4] Cập nhật kiểu sắp xếp
      return { ...state, sortBy: action.sortBy };

    case "SET_FILTER": // ✅ [Bài 4] Cập nhật từ khóa tìm kiếm
      return { ...state, filter: action.filter };

    default:
      return state;
  }
}

// ✅ [Bài 4] Mở rộng initialState để lưu sortBy và filter
const initialState = {
  items: [],
  sortBy: "created", // created | alphabet
  filter: "",
};

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");

  const handleAddItem = () => {
    if (newItemName.trim() !== "") {
      const newItem = {
        id: Date.now(),
        name: newItemName,
      };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const getFilteredSortedItems = () => {
    let items = state.items;

    const filter = state.filter || ""; // ✅ Đảm bảo luôn là string

    if (filter.trim()) {
      items = items.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
    }

    if (state.sortBy === "alphabet") {
      items = [...items].sort((a, b) => a.name.localeCompare(b.name));
    }

    return items;
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="offset-md-3">
          <Form>
            <Form.Group controlId="formItem" className="mb-3">
              <Form.Label>Enter Item:</Form.Label>
              <Form.Control
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter item name"
              />
            </Form.Group>

            <Button variant="primary" onClick={handleAddItem}>
              Add Item
            </Button>

            {/* ✅ [Bài 4] Bộ lọc */}
            <Form.Group className="mt-3">
              <Form.Label>Filter Items:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search item"
                value={state.filter}
                onChange={(e) =>
                  dispatch({ type: "SET_FILTER", filter: e.target.value })
                }
              />
            </Form.Group>

            {/* ✅ [Bài 4] Chọn kiểu sắp xếp */}
            <Form.Group className="mt-3">
              <Form.Label>Sort By:</Form.Label>
              <Form.Select
                value={state.sortBy}
                onChange={(e) =>
                  dispatch({ type: "SET_SORT", sortBy: e.target.value })
                }
              >
                <option value="created">Time Created</option>
                <option value="alphabet">Alphabet (A-Z)</option>
              </Form.Select>
            </Form.Group>
          </Form>

          <h3 className="mt-4">Item List:</h3>

          <ListGroup>
            {getFilteredSortedItems().map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                {/* ✅ [Bài 4] Cho phép sửa tên trực tiếp */}
                <Form.Control
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    dispatch({
                      type: "EDIT_ITEM",
                      id: item.id,
                      name: e.target.value,
                    })
                  }
                />
                <Button
                  variant="danger"
                  size="sm"
                  className="ms-2"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;
