import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerCardsComponent } from './worker-cards.component';

describe('WorkerCardsComponent', () => {
  let component: WorkerCardsComponent;
  let fixture: ComponentFixture<WorkerCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerCardsComponent]
    });
    fixture = TestBed.createComponent(WorkerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
