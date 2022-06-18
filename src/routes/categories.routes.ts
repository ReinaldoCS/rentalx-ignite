import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesResitory';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const categories = new CategoriesRepository();

  categories.create({ name, description });

  response.status(201).send();
});

export { categoriesRoutes };
