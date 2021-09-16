/*
 *    @filename   	Sorceress.BlovaBuild.js
 *	  @author	  	isid0re
 *    @desc      	Sorceress blizzard nova build
 */

var build = {
	caster: true,
	skillstab: 10, //cold
	wantedskills: [59, 48], // blizzard, nova
	usefulskills: [63, 65, 55], // light-mastery, cold mastery
	mercAuraName: Developer.PD2 ? "Defiance" : "Holy Freeze",
	mercAuraWanted: Developer.PD2 ? 104 : 114,
	mercDiff: Developer.PD2 ? 0 : 1,
	stats: [
		["strength", 156], ["dexterity", 35], ["vitality", "all"]
	],
	skills: [
		[37, 1], // warmth
		[40, 1], // Frozen Armor
		[39, 1], // ice bolt
		[45, 1], // ice blast
		[42, 1], // Static
		[43, 1], // telekensis
		[44, 1], // Frost nova
		[54, 1], // Teleport
		[55, 1], // gspike
		[59, 1], // blizzard
		[65, 1], // cold mastery
		[48, 20], // nova
		[63, 20], // light-mastery
		[59, 20], // blizzard
		[65, 5], // cold mastery
		[45, 20], // ice blast
		[55, 5], // gspike
		[39, 14], // ice bolt
	],
	autoEquipTiers: [ // autoequip final gear
		//weapon
		"[Type] == mace && [flag] == runeword # [FCR] == 40 # [tier] == 100000 + tierscore(item)", // HotO
		//Helmet
		"[name] == diadem && [quality] == unique # [fcr] == 25 # [tier] == 100000 + tierscore(item)", //griffons
		//belt
		"[name] == spiderwebsash && [quality] == unique && [flag] != ethereal # [enhanceddefense] >= 90 # [tier] == 100000 + tierscore(item)", //arach's
		//boots
		"[name] == battleboots && [quality] == unique && [flag] != ethereal # [itemmagicbonus] >= 30 # [tier] == 100000 + tierscore(item)", //war traveler
		//armor
		"[type] == armor && [flag] == runeword  && [flag] != ethereal # [fireresist] == 65 && [hpregen] == 7 # [tier] == 100000 + tierscore(item)", //CoH
		//shield
		"[type] == shield # [fcr] >= 35 && [maxmana] >= 89 # [tier] == 100000 + tierscore(item)", //spirit
		//gloves
		"[name] == lightgauntlets && [quality] == unique && [flag] != ethereal # [fcr] >= 20 # [tier] == 100000 + tierscore(item)", //magefist
		//ammy
		"[type] == amulet && [quality] == unique # [strength] == 5 && [coldresist] >= 30 # [tier] == 100000 + tierscore(item)", //maras
		//rings
		"[type] == ring && [quality] == unique # [itemmaxmanapercent] == 25 # [tier] == 100000 + tierscore(item)", //soj
		"[name] == ring && [quality] == unique # [maxstamina] == 50 && [lifeleech] >= 3 # [tier] == 100000 + tierscore(item)", //bk ring
		//merc
		"[type] == armor && [flag] == runeword # [enhanceddefense] >= 200 && [enhanceddamage] >= 300 # [merctier] == 100000",	//Fortitude
		"[name] == demonhead && [quality] == unique # [strength] >= 25 && [enhanceddefense] >= 100 # [merctier] == 50000",	//Andy's
	]
};
