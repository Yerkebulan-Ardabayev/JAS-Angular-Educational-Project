import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeblockBoxComponent } from './codeblock-box.component';

describe('CodeblockBoxComponent', () => {
  let component: CodeblockBoxComponent;
  let fixture: ComponentFixture<CodeblockBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeblockBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeblockBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
