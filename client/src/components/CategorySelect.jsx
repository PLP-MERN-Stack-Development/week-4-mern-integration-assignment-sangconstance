import React, { useEffect, useState } from 'react';
import { categoryService } from '../services/api';

export default function CategorySelect({ value, onChange }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    categoryService.getAllCategories().then(setCategories);
  }, []);
  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      <option value="">Select Category</option>
      {categories.map(cat => (
        <option key={cat._id} value={cat._id}>{cat.name}</option>
      ))}
    </select>
  );
}