import { faker as Faker } from "@faker-js/faker";

export default function seeder(n = 100) {

	return Array(n).fill(null).map(() => ({
		name: Faker.commerce.productName(),
		description: Faker.commerce.productDescription(),
		price: Faker.commerce.price(),
		brand: Faker.commerce.department(),
		image: Faker.image.urlPlaceholder({ width: 640, height: 480 })
	}))
};
