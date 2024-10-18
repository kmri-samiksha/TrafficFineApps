import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineItemComponent } from './fine-item.component';

describe('FineItemComponent', () => {
  let component: FineItemComponent;
  let fixture: ComponentFixture<FineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FineItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
