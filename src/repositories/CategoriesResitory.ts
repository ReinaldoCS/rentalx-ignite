import { Category } from '../models/Category';

// DTO => Data transfer object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO) {
    const category = new Category();

    Object.assign(category, {
      name: name.toLocaleLowerCase(),
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list() {
    return this.categories;
  }

  findByName(name: string) {
    const category = this.categories.find(
      category =>
        category.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );
    return category;
  }
}

export { CategoriesRepository };
