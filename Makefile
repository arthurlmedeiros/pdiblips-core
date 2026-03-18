.PHONY: lint build test

lint:
	cd ../.. && npm run lint -- --filter=core

build:
	cd ../.. && npm run build

test:
	cd ../.. && npm test -- --filter=core
