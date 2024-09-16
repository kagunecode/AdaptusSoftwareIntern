module.exports = (resources) => {
	const my = {};
	const shared = {
		STATUS_ERROR: "error",
	};

	my.run = async (input) => {
		const { bundled_config, _debug } = resources;
		let output = {};

		try {
			const data = await setup(await validate(await load(input)));

			const unscanned = data.files.filter(
				(id) => !data.scanned.includes(id) && !data.error.includes(id)
			);

			output = {
				unscanned_files: unscanned,
			};
		} catch (e) {
			if (e.message.startsWith("MissingInput")) {
				_debug(e.stack);
				throw new Error(`Missing Input Error: ${e.message}`);
			} else {
				_debug(e.stack);
				output = {
					status: shared.STATUS_ERROR,
					message: e.message,
				};
			}
		}

		return output;

		async function load(input = {}) {
			const config = {};
			config.files = input.files;
			config.scanned = input.scanned_files;
			config.error = input.errored_files;
			return config;
		}

		async function setup(config) {
			const data = { ...config };
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
				if (!Array.isArray(item)) {
					throw new Error(`InvalidType: ${name} should be an array`);
				}
				if (name === "all files" && item.length === 0) {
					throw new Error("MissingInput: Files array cannot be empty");
				}
			});
			return config;
		}
	};

	return my;
};
