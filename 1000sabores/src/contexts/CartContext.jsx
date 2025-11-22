import { createContext, useContext, useReducer } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

// Reducer para manejar las operaciones del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Verificar si el item ya existe en el carrito
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // Si existe, aumentar la cantidad
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
              : item
          ),
        };
      } else {
        // Si no existe, agregar como nuevo item
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }],
        };
      }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

// Componente proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Funciones del carrito
  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...item, quantity: item.quantity || 1 } });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const cartTotal = state.items.reduce((total, item) => {
    return total + (item.precio * item.quantity);
  }, 0);

  const cartCount = state.items.reduce((count, item) => {
    return count + item.quantity;
  }, 0);

  const value = {
    items: state.items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};