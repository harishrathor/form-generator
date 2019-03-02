import { Field } from './../field.class';
import { Component, OnInit } from '@angular/core';
import * as Quill from 'quill';


@Component({
  selector: 'html-editor',
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.css']
})
export class HtmlEditorComponent extends Field {

	protected _eventsAndCallbacksMapping: any;
	private _defaultQuillConfig = {
		toolbar: [
			['bold', 'italic', 'underline', 'strike'],        // toggled buttons
			['blockquote', 'code-block'],

			[{ 'header': 1 }, { 'header': 2 }],               // custom button values
			[{ 'list': 'ordered' }, { 'list': 'bullet' }],
			[{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
			[{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
			[{ 'direction': 'rtl' }],                         // text direction

			[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
			[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

			[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
			[{ 'font': [] }],
			[{ 'align': [] }],

			['clean'],                                         // remove formatting button

			['link', 'image', 'video']                         // link and image, video
		]
	};


	protected _applyEvents() {
		try {
			this._eventsAndCallbacksMapping = {};
			if (this.fieldDef.events && this.fieldDef.events.constructor === Array) {
				this.fieldDef.events.forEach(eventData => {
					const eventName = eventData.name;
					const callbacksArr = eventData.callbacks;
					this._eventsAndCallbacksMapping[eventName] = [];
					callbacksArr.forEach(calbackData => {
						const callbackFn = this._getEventCallback(eventName, calbackData);
						if (callbackFn) {
							try {
								this._eventsAndCallbacksMapping[eventName].push(callbackFn);
							} catch (error) {
								console.log(error);
							}
						}
					});
				});
			}
		} catch (error) {
			console.log(error);
		}
	}

	public callEventCallbacks(eventName: string, eventData?: any) {
		try {
			if (this._eventsAndCallbacksMapping && this._eventsAndCallbacksMapping[eventName] && this._eventsAndCallbacksMapping[eventName].length > 0) {
				this._eventsAndCallbacksMapping[eventName].forEach(callback => {
					if (eventData) {
						callback(eventData);
					} else {
						callback();
					}
				});
			}
		} catch (error) {
			console.log(error);
		}
	}

	get options() {
		return this.fieldDef.options;
	}

	get multiple() {
		return this.type === 'MSL';
	}

	get quillConfig() {
		return this.fieldDef.quillConfig || this._defaultQuillConfig;
	}
}
