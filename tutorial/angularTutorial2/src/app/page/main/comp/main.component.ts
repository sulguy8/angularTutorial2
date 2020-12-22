import { Component, ElementRef, OnInit } from '@angular/core';
import { StorageService } from 'src/app/common/service/storage.service';
import { UserInfo } from 'src/app/common/vo/user-info';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public insertUsi = new UserInfo();
  public updateUsi = new UserInfo();

  constructor(
    public storage: StorageService
  ) { }

  ngOnInit(): void {
    this.storage.selectUsis();
  }

  insert() {
    this.storage.insertUsi(this.insertUsi);
    this.insertUsi = new UserInfo();
  }

  select(usiNum) {
    console.log(this.storage.selectUsi(usiNum));
  }

  update(usiNum) {
    this.storage.updateUsi(usiNum, this.updateUsi);
  }

  delete(usiNum) {
    this.storage.deleteUsi(usiNum);
  }
}
