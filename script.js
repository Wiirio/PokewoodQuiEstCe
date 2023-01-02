class MemberControl {
	#enabled = true;
	get Enabled() { return this.#enabled; }
	set Enabled(value) {
		this.#enabled = value;
		if (this.Enabled)
			this.$control.removeAttribute('disabled');
		else
			this.$control.setAttribute('disabled', 'true');
	}

	constructor(member) {

		this.$control = document.createElement('div');
		this.$control.classList += 'pokewood-member';
		this.$control.setAttribute('code', member.code);
	
		this.$avatar = document.createElement('img');
		this.$avatar.setAttribute('src', `./images/${member.code}.png`);
		this.$avatar.setAttribute('alt', member.code);
		this.$avatar.setAttribute('draggable', 'false');
		this.$avatar.setAttribute('tabindex', '0');

		this.$control.append(this.$avatar);
		this.$avatar.addEventListener('click', () => { 
			this.Enabled = !this.Enabled;
			this.$avatar.blur();
		});
		this.$avatar.addEventListener('keydown', (e) => {
			if (e.code != 'Space' && e.code != 'Enter')
				return; 
			this.Enabled = !this.Enabled
		});
	}
}

members = [
	{ code: "echap" },
	{ code: "sullsun" },
	{ code: "sassa" },
	{ code: "lili" },     
	{ code: "virgil" },
	{ code: "wiirio" },
	{ code: "victor" },   
	{ code: "enzoul" },
	{ code: "mako" },
	{ code: "kult" },
	{ code: "gladio" },
	{ code: "maxx" },
	{ code: "fox" },
	{ code: "reo" },
	{ code: "naat" },
	{ code: "nosarms" },
	{ code: "megaman" },
	{ code: "zaussa" },
	{ code: "napsta" },
	{ code: "nae" },
	{ code: "pirnic" },
	{ code: "ink" },
	{ code: "nyaxyan" },
	{ code: "akame" },
	{ code: "math" },
	{ code: "pande" },
	{ code: "picpic" },
	{ code: "gozmo" },
	{ code: "pepino" },
	{ code: "dako" },
	{ code: "tobias" },
	{ code: "emi" },
	{ code: "maxime" },
	{ code: "blo" },
	{ code: "kracksi" },
	{ code: "snubby" },
	{ code: "sandy" },
	{ code: "shawny" },
	{ code: "daishi" },
	{ code: "nelson" },
	{ code: "lampi" },
	{ code: "melissa" }                
]

function init() {

	const $grid = document.getElementById('grid');

	for (let member of members)
		$grid.append(new MemberControl(member).$control);
}

window.addEventListener('load', (e) => init());