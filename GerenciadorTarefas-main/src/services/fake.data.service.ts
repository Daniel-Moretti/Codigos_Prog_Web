import { faker } from '@faker-js/faker';

export function FakeDataService(){

    const userName = faker.internet.userName();
    const email = faker.internet.email();
    const cnpj = faker.number.int({min : 10000000000000, max : 99999999999999 }).toString()

    return {userName, email, cnpj}
}