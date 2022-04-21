import { Injectable } from '@angular/core';
import { Hotel } from './hotel.model';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
private hotels: Hotel[]=[
  {
    hid:'htl01',
    hname:'Hotel Vrindavan',
    himageUrl:'https://media-cdn.tripadvisor.com/media/photo-s/15/61/69/5c/hotel-vrindavan.jpg',
    hrtype:['Single Room','Delux Room','Super Delux'],
    hrating:[[1,2,3,4],'4 Stars',4],
    haddress:['Main Road','Sultanpur','9837262721','contact.vrindavan@gmail.com']
  },
  {
    hid:'htl02',
    hname:'Hotel Avnue',
    // eslint-disable-next-line max-len
    himageUrl:'https://www.katarahospitality.com/wp-content/uploads/2016/03/antoniopistillo.com_14NovembreKataraHospitality_AAA4175-Edit-710x299.jpg',
    hrtype:['Single Room','Delux Room'],
    hrating:[[1,2,3,4,5],'5 Stars',5],
    haddress:['Kake Road','Ranchi','7209856778','contact.Avenue@gmail.com']
  },
  {
    hid:'htl03',
    hname:'Hotel Enclave',
    himageUrl:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/99/1a/ea/the-enclave-hotel-suites.jpg?w=900&h=-1&s=1',
    hrtype:['Single Room','Delux Room','Super Delux','Suite'],
    hrating:[[1,2,3,4,5],'5 Stars',5],
    haddress:['St. street','Orlando','9837262721','contact.enclave@gmail.com']
  }
];
  constructor() { }
  getAllHotels() {
    return [...this.hotels];
    }
  getHotel(hid: string){
  return {
  ...this.hotels.find(hotel=> hotel.hid===hid)
  };
    }
  deleteHotel(hid: string){
    this.hotels=this.hotels.filter(hotel=>hotel.hid !== hid);
  }
}
