import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CarBrand, CarModel } from './../../services/cars.model';
import { CarsService } from './../../services/cars.service';

interface SeleOptions {
    value: string;
}

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    // Form options
    carBrands: CarBrand[] = [];
    carModels: CarModel[] = [];
    years: SeleOptions[] = [
        { value: '2021' },
        { value: '2020' },
        { value: '2019' },
        { value: '2018' },
        { value: '2017' },
        { value: '2016' },
        { value: '2015' }
    ];
    
    quoteForm: any;
    sending: boolean = false;
    sent: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private carsService: CarsService
    ) { }

    ngOnInit(): void {
        // Get cars brands
        this.carsService.getCarBrands().subscribe(data => {
            this.carBrands = data;
        });

        // Form control
        this.quoteForm = this.formBuilder.group({
            brand: new FormControl('', Validators.required),
            model: new FormControl('', Validators.required),
            year: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required)
        });
    }

    onSubmit(): void {

        if (this.quoteForm.status == 'VALID') {
            this.sending = true;
            setTimeout(() => {
                this.sent = true;
                this.sending = false;
                setTimeout(() => {
                    this.quoteForm.reset();
                    this.sent = false;
                }, 3000);
            }, 2000);
        }
    }

    selectBrand(carId:String) {
        this.carsService.getCarModels(carId).subscribe(data => {
            this.carModels = data;
        });
    }

}
