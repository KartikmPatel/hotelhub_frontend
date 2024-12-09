import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';

@Component({
  selector: 'app-paypal-component',
  templateUrl: './paypal-component.component.html',
  styleUrls: ['./paypal-component.component.css']
})
export class PaypalComponentComponent {
  payment : any;
  public payPalConfig?: IPayPalConfig;

  constructor(private router:Router){

  }

  ngOnInit(): void {
    this.initConfig();
    this.payment = sessionStorage.getItem("paymentAmount");
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'AbR1fMJmEFDM9Uf-64hQi83J-rtUue7DJGnmigRccwwGCoKC6PFE8zTxh10p7ceOG1LWYwhJQ-IMOV40', // Replace with valid Sandbox Client ID
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: sessionStorage.getItem("paymentAmount"), // Ensure this is a valid positive value
            }
          }
        ]
      },
      onApprove: (data, actions) => {
        console.log('Transaction approved:', data);
        actions.order.get().then((details: any) => {
          console.log('Order details:', details);
            sessionStorage.setItem("successBooking", "Done");
            this.router.navigate(['/showBookings']);
        });
      },
      onError: (err) => {
        console.error('Error:', err);
      },
    };
  }
}
