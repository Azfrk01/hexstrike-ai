import { faker } from '@faker-js/faker';

export class TestDataManager {
  /**
   * Generates dynamic test data using Faker.
   */
  generateUser() {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }

  /**
   * Loads static test data from a JSON file.
   */
  loadStaticData(fileName: string) {
    // Placeholder for loading data from src/testData/
    return {};
  }
}

export const testDataManager = new TestDataManager();
