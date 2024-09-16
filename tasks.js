module.exports = (resources) => {
	const my = {};
	const shared = {
		// SHARED_VAR: value
		// ...
	};

	// ============================================================================

	my.run = async (input) => {
		const { bundled_config, _debug } = resources;
		let output = {};

		try {
			const data = await setup(await validate(await load(input)));
			// business logic goes here...
			// output = ...
		} catch (e) {
			// if (e.message === ...
			//   throw new Error('...
			// }
			// Default case
			_debug(e.stack);
			throw e;
		}

		return output;

		async function load(input = {}) {
			const config = {};
			// config.var1 = input.var1
			// ...
			// config.config1 = await bundled_config.config('CONFIG1')
			// ...
			config.files = input.files;
			config.scanned = input.scanned_files;
			config.error = input.errored_files;
			return config;
		}

		async function setup(config) {
			const data = { ...config };
			// ...
			return data;
		}

		async function validate(config) {
			[
				[config.files, "all files"],
				[config.scanned, "scanned files"],
				[config.error, "error files"],
			].forEach(([item, name]) => {
				if (!item) {
					throw new Error("MissingInput: " + name);
				}
			});
			return config;
		}
	};

	return my;
};
