import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-slider',
  styleUrl: 'app-slider.scss',
})
export class AppSlider {
  @Prop() name: string;
  @Prop() label: string;
  @Event() valueChange: EventEmitter;

  inputHandler(event) {
    this.valueChange.emit({
      field: this.name,
      value: event.target.value,
    });
  }

  render() {
    return (
      <div class="slider form-group text-center">
        <label>{this.label}</label>
        <input
          type="range"
          class="form-control-range"
          name={this.name}
          id={this.name}
          onChange={this.inputHandler.bind(this)}
        />
      </div>
    );
  }
}
