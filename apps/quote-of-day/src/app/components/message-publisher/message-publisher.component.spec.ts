import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagePublisherComponent } from './message-publisher.component';

describe('MessagePublisherComponent', () => {
  let component: MessagePublisherComponent;
  let fixture: ComponentFixture<MessagePublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagePublisherComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MessagePublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
