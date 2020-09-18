/**
 * An adapter is a class that converts one interface into one that the
 * caller is expecting.
 */

interface ITarget {
	execute();
}

class OtherSystemAdapter implements ITarget {
	constructor(readonly otherSystem: OtherSystem) {}

	execute() {
		this.otherSystem.doesWork();
	}
}

class OtherSystem {
	public doesWork() {}
}
