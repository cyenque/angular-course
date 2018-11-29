import { TestAngularModule } from './test-angular.module';

describe('TestAngularModule', () => {
  let testAngularModule: TestAngularModule;

  beforeEach(() => {
    testAngularModule = new TestAngularModule();
  });

  it('should create an instance', () => {
    expect(testAngularModule).toBeTruthy();
  });
});
