import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Employee } from '../models/employee.model';
import { Employee } from '../services/employee.model';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private baseUrl = 'http://localhost:5000/api/employee';

    constructor(private http: HttpClient) {}

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.baseUrl);
    }

    getEmployeeById(id: number): Observable<Employee> {
        return this.http.get<Employee>(`${this.baseUrl}/${id}`);
    }

    createEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.baseUrl, employee);
    }

    updateEmployee(id: number, employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.baseUrl}/${id}`, employee);
    }

    deleteEmployee(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }

    deleteAllEmployees(): Observable<void> {
        return this.http.delete<void>(this.baseUrl);
    }

    searchEmployeesByName(keyword: string): Observable<Employee[]> {
        return this.http.get<Employee[]>(`'/api/employee/search'?Name=${keyword}`);
    }
}
