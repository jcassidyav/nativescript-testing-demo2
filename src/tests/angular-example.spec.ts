import { TestBed } from '@angular/core/testing'
import { ItemsComponent } from '../app/item/items.component'
import { ItemService } from '../app/item/item.service'
import { Page } from '@nativescript/core'
describe('search.component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsComponent],
      providers: [ItemService, Page],
    }).compileComponents()
  })

  it('should fail', async () => {
    const fixture = TestBed.createComponent(ItemsComponent)
    const component = fixture.componentInstance;
    component.ngOnInit();
    expect(component.countItems()).toEqual(10)
  })

  it('should succeed', async () => {
    const fixture = TestBed.createComponent(ItemsComponent)
    const component = fixture.componentInstance;
    component.ngOnInit();
    expect(component.countItems()).toEqual(22)
  })
})