import { ConfigTypeModule } from './config-type.module';

describe('ConfigTypeModule', () => {
  let configTypeModule: ConfigTypeModule;

  beforeEach(() => {
    configTypeModule = new ConfigTypeModule();
  });

  it('should create an instance', () => {
    expect(configTypeModule).toBeTruthy();
  });
});
