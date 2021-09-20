/**
 *    @filename		paladin.levelingBuild.js
 *	  @author	  	isid0re
 *    @desc			paladin build for hammerdin.
 * 					skills based on https://www.diabloii.net/forums/threads/max-damage-hammerdin-guide-by-captain_bogus-repost.127596/
 */

var build = {
	caster: true,
	skillstab: 24, //combat
	wantedskills: [101, 113], // Holy Bolt, Salvation
	usefulskills: [117], // Holy Shield
	mercAuraName: Developer.PD2 ? "Defiance" : "Holy Freeze",
	mercAuraWanted: Developer.PD2 ? 104 : 114,
	mercDiff: Developer.PD2 ? 0 : 1,
	stats: [
		["vitality", 60], ["dexterity", 30], ["strength", 27],
		["vitality", 91], ["dexterity", 44], ["strength", 30],
		["vitality", 96], ["dexterity", 59], ["strength", 60],
		["vitality", 109], ["dexterity", 77], ["strength", 95],
		["vitality", 137], ["dexterity", 89],
		["vitality", 173], ["dexterity", 103],
		["vitality", 208], ["dexterity", 118],
		["vitality", 243], ["dexterity", 133],
		["vitality", 279], ["dexterity", 147],
		["vitality", "all"]
	],
	skills: [
		[101, 15], // Holy Bolt
		[97, 1], // Smite
		[107, 1], // Charge
		[101, 20], // MAX Holy Bolt
		[116, 1], // Conversion
		[117, 1], // Holy Shield
		[371, 9], // Holy Light
		[125, 1], // Salvation
		[371, 20], // MAX Holy Light
		[112, 1], // Blessed Hammer
		[121, 20], // MAX Fist of the Heavens
		[364, 20], // MAX Holy Nova
		[117, 20], // MAX Holy Shield
		[125, 20] // MAX Salvation
	]
};
