import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IamContainer } from './iam.container';

describe('IamContainer', () => {
  let component: IamContainer;
  let fixture: ComponentFixture<IamContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [IamContainer],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IamContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
