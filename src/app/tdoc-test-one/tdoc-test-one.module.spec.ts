import { TdocTestOneModule } from './tdoc-test-one.module';

describe('TdocTestOneModule', () => {
  let tdocTestOneModule: TdocTestOneModule;

  beforeEach(() => {
    tdocTestOneModule = new TdocTestOneModule();
  });

  it('should create an instance', () => {
    expect(tdocTestOneModule).toBeTruthy();
  });
});
