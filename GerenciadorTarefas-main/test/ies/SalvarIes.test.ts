import { IesCriacaoDto } from "../../src/models/ies/data/entity/Ies";
import { IesRepository } from "../../src/models/ies/data/repository/IesRepository"
import { SalvarIesUseCase } from "../../src/models/ies/domain/useCases/SalvarIesUseCase";
import { FakeDataService } from "../../src/services/fake.data.service";

describe('SalvarIes', () => {

    it('teste de criação de nova Ies', async () => {

        const iesRepository = new IesRepository();
        const salvarIesUseCase = new SalvarIesUseCase(iesRepository);
        const fakeService = FakeDataService();

        const iesCriacaoDto: IesCriacaoDto = {
            nome: fakeService.userName,
            cnpj: fakeService.cnpj
        }

        console.log('Username: ' + FakeDataService().userName)

        const ies = await salvarIesUseCase.execute(iesCriacaoDto);

        expect(ies).toBeDefined();
        expect(ies.codigo).toBeDefined();
        expect(iesCriacaoDto.nome).toBe(ies.nome);
        expect(iesCriacaoDto.cnpj).toBe(ies.cnpj);

    })

})