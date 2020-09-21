/**
 * A bridge seperates an abstraction from its implementation. So for this
 * example we create an a sensor abstraction that returns a value.
 *
 * We then create concrete implementation of the abstraction type, in
 * this case a ThermometerSensor. We could have other types of sensors
 * that all are able to return a value. These types are the "bridges"
 * and act as an adapter for the implementation.
 *
 * Now ThermomenterSensor (the abstraction) doesn't define the behavior,
 * instead we delegate that to the implementation. We can have a bunch
 * of thermometers from a bunch of different manufacturers.
 *
 * Each of those acts as an adapter over the implementation of the
 * specific implementation of for the interface.
 */

/**
 * Defines the ability to read a sensor value. This is the common
 * functionality that lives across all of the types in the abstraction.
 */
interface ISensor {
	readSensorValue(): number;
}

/**
 * Next we implement a "bridge" type which implements the abstraction
 * interface. Notice that it is similar to an adapter in that it
 * wraps an implementation to conform to a new signature.
 */
class ThermometerSensor implements ISensor {
	constructor(readonly implementation: IThermometer) {}

	readSensorValue(): number {
		return this.implementation.readTemperature();
	}
}

/**
 * Here we define a specific type of implementation that will be wrapped
 * by one of the abstraction implementations. Other sensor types would
 * have their own interface they need to confirm to.
 */
interface IThermometer {
	readTemperature(): number;
}

/**
 * Implement a concrete implementation for a thermometer
 */
class Manufacturer1Thermometer implements IThermometer {
	readTemperature(): number {
		return 1;
	}
}

/**
 * Implement a concrete implementation for a thermometer
 */
class Manufacturer2Thermometer implements IThermometer {
	readTemperature(): number {
		return 2;
	}
}
