import {IObservableValue, observable} from "mobx";
import {ChangeEvent} from "react";

class FormElement<T=string> {
  private boxedValue: IObservableValue<T>;
  private readonly onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;

  constructor(defaultValue: T = null) {
    this.boxedValue = observable.box(defaultValue);
    this.onChangeHandler = this.defaultOnChangeHandler.bind(this);
  }

  get props() {
    return {
      value: this.boxedValue.get(),
      onChange: this.onChangeHandler
    }
  }

  private defaultOnChangeHandler(event) {
    this.boxedValue.set(event.target.value);
  }
}

export default FormElement;
