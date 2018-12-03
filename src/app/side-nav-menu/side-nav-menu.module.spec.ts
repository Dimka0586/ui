import { SideNavMenuModule } from './side-nav-menu.module';

describe('SideNavMenuModule', () => {
  let sideNavMenuModule: SideNavMenuModule;

  beforeEach(() => {
    sideNavMenuModule = new SideNavMenuModule();
  });

  it('should create an instance', () => {
    expect(sideNavMenuModule).toBeTruthy();
  });
});
