/**
 * The facade pattern is a structural design pattern that is a front
 * masking more complex internal behavior. It is often used when a there
 * are many interdependent classes and the facade hides the
 * implementation details.
 *
 * A facade is used when a simpler interface to an underlying object is
 * desired.
 *
 * Alternatively an adpater can be used when the wrapper must respect a
 * particular interface.
 */

class SubSystem1 {
	public execute() {
		console.log("SubSystem1.execute");
	}
}

class SubSystem2 {
	public executeMore() {
		console.log("SubSystem2.executeMore");
	}
}

class SubSystem3 {
	public prep() {
		console.log("SubSystem3.prep");
	}
}

class Facade {
	private system1: SubSystem1;
	private system2: SubSystem2;
	private system3: SubSystem3;

	constructor() {
		this.system1 = new SubSystem1();
		this.system2 = new SubSystem2();
		this.system3 = new SubSystem3();
	}

	public doWork() {
		this.system3.prep();
		this.system1.execute();
	}

	public doMoreWork() {
		this.system3.prep();
		this.system2.executeMore();
	}
}
