import { TestBed } from '@angular/core/testing';

import { MessageBoredService } from './message-bored.service';

describe('MessageBoredService', () => {
  let service: MessageBoredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageBoredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
