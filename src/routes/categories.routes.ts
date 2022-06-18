import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesResitory';

const categoriesRoutes = Router();

const categories = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryAllreadyExists = categories.findByName(name);

  if (categoryAllreadyExists) {
    return response.status(400).json({ error: 'Category allready exists!' });
  }

  categories.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const all = categories.list();

  return response.json(all);
});

export { categoriesRoutes };
