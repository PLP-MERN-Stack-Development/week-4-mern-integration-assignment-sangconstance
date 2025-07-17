import { useState, useEffect } from 'react';
import { categoryService } from '../services/api';

export default function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    categoryService.getAllCategories()
      .then(data => setCategories(data))
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading };
}