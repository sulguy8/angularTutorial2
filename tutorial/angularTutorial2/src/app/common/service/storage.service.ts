import { keyframes } from '@angular/animations';
import { Injectable } from '@angular/core';
import { UserInfo } from '../vo/user-info';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  public usiNum = 0;
  public user_info = Array<UserInfo>();
  constructor() { }

  insertUsi(usi) {
    if(!this.user_info) {
      this.user_info = Array<UserInfo>();
    }
    let tmpUsi = new UserInfo;

    // # 얕은 복사
    Object.assign(tmpUsi, usi);

    // # 깊은 복사
    // tmpUsi = JSON.parse(JSON.stringify(usi));

    tmpUsi.usiNum = this.usiNum++;
    this.user_info.push(tmpUsi);
    this.commit();
  }

  selectUsis(){
    this.user_info = JSON.parse(localStorage.getItem('user_info'));
    this.usiNum = this.user_info[this.user_info.length - 1].usiNum + 1;
  }

  selectUsi(usiNum) {
    let usis = this.user_info;
    for (let i in usis) {
      if (usis[i].usiNum == usiNum) {
        return usis[i];
      }
    }
  }

  updateUsi(usiNum, usi) {

  }

  deleteUsi(usiNum) {
    let usis = this.user_info;
    for (let i in usis) {
      if (usis[i].usiNum == usiNum) {
        delete usis[i];

        // # null값 지우기
        let tmpUsi = [];
        for(let usi of usis){
          if(!usi){

          } else {
            tmpUsi.push(usi)
          }
        }
        this.user_info = tmpUsi;

        this.commit();
      }
    }
  }

  commit() {
    localStorage.setItem('user_info', JSON.stringify(this.user_info));
  }
}
