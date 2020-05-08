const SP = require('./index'), { exec: e } = require('child_process');

const wt = `node -e "for (let i = 0; i < 5e6; i++) {console.log()}"`

const Ora = require('ora');

const spinner = Ora({
	text: 'Test #3',
	spinner: SP.slidingDots.seven2
});

const s = t => {
	spinner.stopAndPersist({
		text: t,
		symbol: SP.succeed('slidingDots.seven2')
	})
}

const f = t => {
	spinner.stopAndPersist({
		text: t,
		symbol: SP.fail('slidingDots.seven2')
	})
}

const w = t => {
	spinner.stopAndPersist({
		text: t,
		symbol: SP.warn('slidingDots.seven2')
	})
}

const i = t => {
	spinner.stopAndPersist({
		text: t,
		symbol: SP.info('slidingDots.seven2')
	})
}

console.log(`Test #1 ${SP.slidingDots.seven2.frames}`);

console.log(`Test #2 ${SP.succeed('slidingDots.seven2')}`);

spinner.start();
s();
spinner.start();
f();
spinner.start();
w();
spinner.start();
i();

spinner.text = 'Test #4';

spinner.start();
e(wt, () => {
	// if (e) throw e;
	spinner.stopAndPersist({
		symbol: SP.succeed('slidingDots.seven2')
	});
});