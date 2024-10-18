import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineCreateComponent } from './fine-create.component';

describe('FineCreateComponent', () => {
  let component: FineCreateComponent;
  let fixture: ComponentFixture<FineCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FineCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FineCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
