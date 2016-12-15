import { item } from './item';
import { TodoItem } from './todo';

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('TodoItem', () => {
    it('should create an instance', () => {
        expect(new TodoItem()).toBeTruthy();
    });

    it('should accept values in the constructor', () => {
        let todo = new TodoItem({
            text: 'hello'
        });
        expect(todo.text).toEqual('hello');
    });

});
