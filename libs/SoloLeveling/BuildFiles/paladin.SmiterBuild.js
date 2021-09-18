/**
 *    @filename   paladin.SmiterBuild.js
 *	  @author	  isid0re
 *    @desc       End-game smiter build
 */

var build = {
	caster: me.charlvl === SetUp.respecTwo() ? false : true,
	skillstab: 24, //combat
	wantedskills: [97, 122], //smite, fanaticism
	usefulskills: [117, 125], //holy shield, salvation
	mercAuraName: Developer.PD2 ? "Defiance" : "Holy Freeze",
	mercAuraWanted: Developer.PD2 ? 104 : 114,
	mercDiff: Developer.PD2 ? 0 : 1,
	stats: [
		["strength", 115], ["dexterity", 136], ["vitality", 300], ["dexterity", "block"], ["vitality", "all"]
	],
	skills: [
		[97, 20], //smite
		[101, 1], // holy bolt
		[107, 1], // charge
		...(Developer.PD2 ? ["371 ,1"] : []), // PD2 holy light
		[112, 1], //blessed hammer
		[117, 20], // holy shield
		[98, 1], // might
		[108, 1], //blessed aim
		[113, 1], //concentration
		[122, 20], // fanaticism
		[125, 5], // salvation
		[110, 15], // resist lightning
		[100, 14], // resist fire
		[105, 10] // resist cold
	],
	autoEquipTiers: [ // autoequip final gear
		//weapon
		"[Type] == sword && [flag] == runeword # [ias] >= 30 # [tier] == 100000 + tierscore(item)", //Grief
		//helmet
		"[name] == wingedhelm && [quality] == set && [flag] != ethereal # [fhr] >= 30 # [tier] == 100000 + tierscore(item)", // gface
		//belt
		"[name] == warbelt && [quality] == unique && [flag] != ethereal # [enhanceddefense] >= 160  # [tier] == 100000 + tierscore(item)", //tgods
		//boots
		"[name] == lightplatedboots && [quality] == unique && [flag] != ethereal # [enhanceddefense] >= 50 # [tier] == 100000 + tierscore(item)", //goblin toes
		//armor
		"[type] == armor && [flag] != ethereal && [flag] == runeword # [frw] >= 45 # [tier] == 100000 + tierscore(item)", //Enigma
		//shield
		"[Name] == GildedShield && [Quality] == unique && [flag] != ethereal  # [EnhancedDefense] >= 150 # [tier] == 100000 + tierscore(item)", //hoz
		//gloves
		"[name] == vampirebonegloves && [quality] == unique && [flag] != ethereal # [enhanceddefense] >= 100 && [strength] >= 12 && [lifeleech] >= 9  # [tier] == 100000 + tierscore(item)", // drac's
		//ammy
		"[type] == amulet && [quality] == unique # [lightresist] == 35 # [tier] == 100000 + tierscore(item)", //highlords
		//rings
		"[type] == ring && [quality] == unique # [tohit] >= 180 && [dexterity] >= 15 # [tier] == 100000 + tierscore(item)", // ravenfrost
		"[type] == ring && [quality] == unique # [lifeleech] >= 5 && [maxstamina] == 50 # [tier] == 100000 + tierscore(item)", // bul-kathos' wedding band
		//merc
		"[type] == armor && [flag] == runeword # [enhanceddefense] >= 200 && [enhanceddamage] >= 300 # [merctier] == 100000",	//Fortitude
		"[name] == demonhead && [quality] == unique # [strength] >= 25 && [enhanceddefense] >= 100 # [merctier] == 50000",	//Andy's
	]
};
