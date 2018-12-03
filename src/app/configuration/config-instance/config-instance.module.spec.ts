import { ConfigInstanceModule } from './config-instance.module';

describe('ConfigInstanceModule', () => {
  let configInstanceModule: ConfigInstanceModule;

  beforeEach(() => {
    configInstanceModule = new ConfigInstanceModule();
  });

  it('should create an instance', () => {
    expect(configInstanceModule).toBeTruthy();
  });
});
