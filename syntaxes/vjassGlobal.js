const vscode = require('vscode');
const vscode_ripgrep = require('vscode-ripgrep');
const child_process = require("child_process");

const execOpts = {
    cwd: vscode.workspace.rootPath,
    maxBuffer: 1024 * 1024,
};

var processLines = function(pattern, filepath){
    let lines;
    try {
        let output = child_process.execSync(`${vscode_ripgrep.rgPath} --no-messages -o --case-sensitive --line-number --column --hidden -e "${pattern}" "${filepath}"`, execOpts);
        lines = output.toString().split('\n');
    } catch (error) {
        console.log("RipgrepCommand failed: " + filepath);
        lines = [];
    }
    return lines;
}
exports.processLines = processLines;

var filePattern = '{**/*.j,**/*.jass,**/*.ai}';
exports.filePattern = filePattern;

var namePattern = /\s/.source + '+([a-zA-Z_][a-zA-Z0-9_]*)';

var regPatterns = [
    '(function)' + namePattern,
    '(method)' + namePattern,
    '(struct)' + namePattern,
    '(library)' + namePattern,
    '(interface function)' + namePattern,
    '(hashtable|integer|real|boolean|string|handle|agent|event|player|widget|unit|destructable|item|ability|buff|force|group|trigger|triggercondition|triggeraction|timer|location|region|rect|boolexpr|sound|conditionfunc|filterfunc|unitpool|itempool|race|alliancetype|racepreference|gamestate|igamestate|fgamestate|playerstate|playerscore|playergameresult|unitstate|aidifficulty|eventid|gameevent|playerevent|playerunitevent|unitevent|limitop|widgetevent|dialogevent|unittype|gamespeed|gamedifficulty|gametype|mapflag|mapvisibility|mapsetting|mapdensity|mapcontrol|playerslotstate|volumegroup|camerafield|camerasetup|playercolor|placement|startlocprio|raritycontrol|blendmode|texmapflags|effect|effecttype|weathereffect|terraindeformation|fogstate|fogmodifier|dialog|button|quest|questitem|defeatcondition|timerdialog|leaderboard|multiboard|multiboarditem|trackable|gamecache|version|itemtype|texttag|attacktype|damagetype|weapontype|soundtype|lightning|pathingtype|mousebuttontype|animtype|subanimtype|image|ubersplat)(?:(\\s+array)*)' + namePattern,
];

exports.searchPatterns = [
    { kind: vscode.SymbolKind.Function, pattern: /\b/.source + regPatterns[0] + /\s+/.source },
    { kind: vscode.SymbolKind.Method, pattern: /\b/.source + regPatterns[1] + /\s+/.source },
    { kind: vscode.SymbolKind.Struct, pattern: /\b/.source + regPatterns[2] },
    { kind: vscode.SymbolKind.Module, pattern: /\b/.source + regPatterns[3] },
    { kind: vscode.SymbolKind.Interface, pattern: /\b/.source + regPatterns[4] + /\s+/.source },
    { kind: vscode.SymbolKind.Variable, pattern: /\b/.source + regPatterns[5] },
];



exports.symbolPattern = /\b/.source + '(' + regPatterns[0] + '|' + regPatterns[1] + '|' + regPatterns[2] + '|' + regPatterns[3] + '|' + regPatterns[4] + '|' + regPatterns[5] + ')' + /\s+/.source;


exports.cjfunctions = {
    ConvertRace: {
        completion: "constant native ConvertRace takes integer i returns race",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertAllianceType: {
        completion: "constant native ConvertAllianceType takes integer i returns alliancetype",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertRacePref: {
        completion: "constant native ConvertRacePref takes integer i returns racepreference",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertIGameState: {
        completion: "constant native ConvertIGameState takes integer i returns igamestate",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertFGameState: {
        completion: "constant native ConvertFGameState takes integer i returns fgamestate",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertPlayerState: {
        completion: "constant native ConvertPlayerState takes integer i returns playerstate",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertPlayerScore: {
        completion: "constant native ConvertPlayerScore takes integer i returns playerscore",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertPlayerGameResult: {
        completion: "constant native ConvertPlayerGameResult takes integer i returns playergameresult",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertUnitState: {
        completion: "constant native ConvertUnitState takes integer i returns unitstate",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertAIDifficulty: {
        completion: "constant native ConvertAIDifficulty takes integer i returns aidifficulty",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertGameEvent: {
        completion: "constant native ConvertGameEvent takes integer i returns gameevent",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertPlayerEvent: {
        completion: "constant native ConvertPlayerEvent takes integer i returns playerevent",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertPlayerUnitEvent: {
        completion: "constant native ConvertPlayerUnitEvent takes integer i returns playerunitevent",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
        ],
    
    },
    ConvertWidgetEvent: {
        completion: "constant native ConvertWidgetEvent takes integer i returns widgetevent",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertDialogEvent: {
        completion: "constant native ConvertDialogEvent takes integer i returns dialogevent",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertUnitEvent: {
        completion: "constant native ConvertUnitEvent takes integer i returns unitevent",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertLimitOp: {
        completion: "constant native ConvertLimitOp takes integer i returns limitop",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertUnitType: {
        completion: "constant native ConvertUnitType takes integer i returns unittype",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertGameSpeed: {
        completion: "constant native ConvertGameSpeed takes integer i returns gamespeed",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertPlacement: {
        completion: "constant native ConvertPlacement takes integer i returns placement",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertStartLocPrio: {
        completion: "constant native ConvertStartLocPrio takes integer i returns startlocprio",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertGameDifficulty: {
        completion: "constant native ConvertGameDifficulty takes integer i returns gamedifficulty",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertGameType: {
        completion: "constant native ConvertGameType takes integer i returns gametype",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertMapFlag: {
        completion: "constant native ConvertMapFlag takes integer i returns mapflag",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertMapVisibility: {
        completion: "constant native ConvertMapVisibility takes integer i returns mapvisibility",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertMapSetting: {
        completion: "constant native ConvertMapSetting takes integer i returns mapsetting",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertMapDensity: {
        completion: "constant native ConvertMapDensity takes integer i returns mapdensity",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertMapControl: {
        completion: "constant native ConvertMapControl takes integer i returns mapcontrol",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertPlayerColor: {
        completion: "constant native ConvertPlayerColor takes integer i returns playercolor",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertPlayerSlotState: {
        completion: "constant native ConvertPlayerSlotState takes integer i returns playerslotstate",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertVolumeGroup: {
        completion: "constant native ConvertVolumeGroup takes integer i returns volumegroup",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertCameraField: {
        completion: "constant native ConvertCameraField takes integer i returns camerafield",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertBlendMode: {
        completion: "constant native ConvertBlendMode takes integer i returns blendmode",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertRarityControl: {
        completion: "constant native ConvertRarityControl takes integer i returns raritycontrol",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertTexMapFlags: {
        completion: "constant native ConvertTexMapFlags takes integer i returns texmapflags",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertFogState: {
        completion: "constant native ConvertFogState takes integer i returns fogstate",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertEffectType: {
        completion: "constant native ConvertEffectType takes integer i returns effecttype",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertVersion: {
        completion: "constant native ConvertVersion takes integer i returns version",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertItemType: {
        completion: "constant native ConvertItemType takes integer i returns itemtype",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertAttackType: {
        completion: "constant native ConvertAttackType takes integer i returns attacktype",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertDamageType: {
        completion: "constant native ConvertDamageType takes integer i returns damagetype",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertWeaponType: {
        completion: "constant native ConvertWeaponType takes integer i returns weapontype",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertSoundType: {
        completion: "constant native ConvertSoundType takes integer i returns soundtype",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertPathingType: {
        completion: "constant native ConvertPathingType takes integer i returns pathingtype",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertMouseButtonType: {
        completion: "constant native ConvertMouseButtonType takes integer i returns mousebuttontype",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertAnimType: {
        completion: "constant native ConvertAnimType takes integer i returns animtype",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ConvertSubAnimType: {
        completion: "constant native ConvertSubAnimType takes integer i returns subanimtype",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    OrderId: {
        completion: "constant native OrderId takes string orderIdString returns integer",
        description: "",
        parameters: [
            { label: 'string', name: 'orderIdString', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    OrderId2String: {
        completion: "constant native OrderId2String takes integer orderId returns string",
        description: "",
        parameters: [
            { label: 'integer', name: 'orderId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    UnitId: {
        completion: "constant native UnitId takes string unitIdString returns integer",
        description: "",
        parameters: [
            { label: 'string', name: 'unitIdString', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    UnitId2String: {
        completion: "constant native UnitId2String takes integer unitId returns string",
        description: "",
        parameters: [
            { label: 'integer', name: 'unitId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    AbilityId: {
        completion: "constant native AbilityId takes string abilityIdString returns integer",
        description: "",
        parameters: [
            { label: 'string', name: 'abilityIdString', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    AbilityId2String: {
        completion: "constant native AbilityId2String takes integer abilityId returns string",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilityId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetObjectName: {
        completion: "constant native GetObjectName takes integer objectId returns string",
        description: "",
        parameters: [
            { label: 'integer', name: 'objectId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetBJMaxPlayers: {
        completion: "constant native GetBJMaxPlayers takes nothing returns integer",
        description: "",
        parameters: [
      ],

    },
    GetBJPlayerNeutralVictim: {
        completion: "constant native GetBJPlayerNeutralVictim takes nothing returns integer",
        description: "",
        parameters: [
      ],

    },
    GetBJPlayerNeutralExtra: {
        completion: "constant native GetBJPlayerNeutralExtra takes nothing returns integer",
        description: "",
        parameters: [
      ],

    },
    GetBJMaxPlayerSlots: {
        completion: "constant native GetBJMaxPlayerSlots takes nothing returns integer",
        description: "",
        parameters: [
      ],

    },
    GetPlayerNeutralPassive: {
        completion: "constant native GetPlayerNeutralPassive takes nothing returns integer",
        description: "",
        parameters: [
      ],

    },
    GetPlayerNeutralAggressive: {
        completion: "constant native GetPlayerNeutralAggressive takes nothing returns integer",
        description: "",
        parameters: [
      ],

    },
    Deg2Rad: {
        completion: "native Deg2Rad takes real degrees returns real",
        description: "",
        parameters: [
            { label: 'real', name: 'degrees', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    Rad2Deg: {
        completion: "native Rad2Deg takes real radians returns real",
        description: "",
        parameters: [
            { label: 'real', name: 'radians', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    Sin: {
        completion: "native Sin takes real radians returns real",
        description: "",
        parameters: [
            { label: 'real', name: 'radians', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    Cos: {
        completion: "native Cos takes real radians returns real",
        description: "",
        parameters: [
            { label: 'real', name: 'radians', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    Tan: {
        completion: "native Tan takes real radians returns real",
        description: "",
        parameters: [
            { label: 'real', name: 'radians', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    Asin: {
        completion: "native Asin takes real y returns real",
        description: "",
        parameters: [
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    Acos: {
        completion: "native Acos takes real x returns real",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    Atan: {
        completion: "native Atan takes real x returns real",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    Atan2: {
        completion: "native Atan2 takes real y, real x returns real",
        description: "",
        parameters: [
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SquareRoot: {
        completion: "native SquareRoot takes real x returns real",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    Pow: {
        completion: "native Pow takes real x, real power returns real",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'power', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    I2R: {
        completion: "native I2R takes integer i returns real",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    R2I: {
        completion: "native R2I takes real r returns integer",
        description: "",
        parameters: [
            { label: 'real', name: 'r', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    I2S: {
        completion: "native I2S takes integer i returns string",
        description: "",
        parameters: [
            { label: 'integer', name: 'i', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    R2S: {
        completion: "native R2S takes real r returns string",
        description: "",
        parameters: [
            { label: 'real', name: 'r', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    R2SW: {
        completion: "native R2SW takes real r, integer width, integer precision returns string",
        description: "",
        parameters: [
            { label: 'real', name: 'r', documentation: "real variables can hold rational numbers" },
            { label: 'integer', name: 'width', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'precision', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    S2I: {
        completion: "native S2I takes string s returns integer",
        description: "",
        parameters: [
            { label: 'string', name: 's', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    S2R: {
        completion: "native S2R takes string s returns real",
        description: "",
        parameters: [
            { label: 'string', name: 's', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SubString: {
        completion: "native SubString takes string source, integer start, integer end returns string",
        description: "",
        parameters: [
            { label: 'string', name: 'source', documentation: "strings variables hold a series of characters" },
            { label: 'integer', name: 'start', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'end', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    StringLength: {
        completion: "native StringLength takes string s returns integer",
        description: "",
        parameters: [
            { label: 'string', name: 's', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    StringCase: {
        completion: "native StringCase takes string source, boolean upper returns string",
        description: "",
        parameters: [
            { label: 'string', name: 'source', documentation: "strings variables hold a series of characters" },
            { label: 'boolean', name: 'upper', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetLocalizedString: {
        completion: "native GetLocalizedString takes string source returns string",
        description: "",
        parameters: [
            { label: 'string', name: 'source', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    GetLocalizedHotkey: {
        completion: "native GetLocalizedHotkey takes string source returns integer",
        description: "",
        parameters: [
            { label: 'string', name: 'source', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SetMapName: {
        completion: "native SetMapName takes string name returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'name', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SetMapDescription: {
        completion: "native SetMapDescription takes string description returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'description', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SetTeams: {
        completion: "native SetTeams takes integer teamcount returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'teamcount', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetPlayers: {
        completion: "native SetPlayers takes integer playercount returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'playercount', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    DefineStartLocation: {
        completion: "native DefineStartLocation takes integer whichStartLoc, real x, real y returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'whichStartLoc', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    DefineStartLocationLoc: {
        completion: "native DefineStartLocationLoc takes integer whichStartLoc, location whichLocation returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'whichStartLoc', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'location', name: 'whichLocation', documentation: "" },
      ],
    
    },
    SetStartLocPrioCount: {
        completion: "native SetStartLocPrioCount takes integer whichStartLoc, integer prioSlotCount returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'whichStartLoc', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'prioSlotCount', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetStartLocPrio: {
        completion: "native SetStartLocPrio takes integer whichStartLoc, integer prioSlotIndex, integer otherStartLocIndex, startlocprio priority returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'whichStartLoc', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'prioSlotIndex', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'otherStartLocIndex', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'startlocprio', name: 'priority', documentation: "" },
      ],
    
    },
    GetStartLocPrioSlot: {
        completion: "native GetStartLocPrioSlot takes integer whichStartLoc, integer prioSlotIndex returns integer",
        description: "",
        parameters: [
            { label: 'integer', name: 'whichStartLoc', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'prioSlotIndex', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetStartLocPrio: {
        completion: "native GetStartLocPrio takes integer whichStartLoc, integer prioSlotIndex returns startlocprio",
        description: "",
        parameters: [
            { label: 'integer', name: 'whichStartLoc', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'prioSlotIndex', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetGameTypeSupported: {
        completion: "native SetGameTypeSupported takes gametype whichGameType, boolean value returns nothing",
        description: "",
        parameters: [
            { label: 'gametype', name: 'whichGameType', documentation: "" },
            { label: 'boolean', name: 'value', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetMapFlag: {
        completion: "native SetMapFlag takes mapflag whichMapFlag, boolean value returns nothing",
        description: "",
        parameters: [
            { label: 'mapflag', name: 'whichMapFlag', documentation: "" },
            { label: 'boolean', name: 'value', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetGamePlacement: {
        completion: "native SetGamePlacement takes placement whichPlacementType returns nothing",
        description: "",
        parameters: [
            { label: 'placement', name: 'whichPlacementType', documentation: "" },
      ],
    
    },
    SetGameSpeed: {
        completion: "native SetGameSpeed takes gamespeed whichspeed returns nothing",
        description: "",
        parameters: [
            { label: 'gamespeed', name: 'whichspeed', documentation: "" },
      ],
    
    },
    SetGameDifficulty: {
        completion: "native SetGameDifficulty takes gamedifficulty whichdifficulty returns nothing",
        description: "",
        parameters: [
            { label: 'gamedifficulty', name: 'whichdifficulty', documentation: "" },
      ],
    
    },
    SetResourceDensity: {
        completion: "native SetResourceDensity takes mapdensity whichdensity returns nothing",
        description: "",
        parameters: [
            { label: 'mapdensity', name: 'whichdensity', documentation: "" },
      ],
    
    },
    SetCreatureDensity: {
        completion: "native SetCreatureDensity takes mapdensity whichdensity returns nothing",
        description: "",
        parameters: [
            { label: 'mapdensity', name: 'whichdensity', documentation: "" },
      ],
    
    },
    GetTeams: {
        completion: "native GetTeams takes nothing returns integer",
        description: "",
    
    },
    GetPlayers: {
        completion: "native GetPlayers takes nothing returns integer",
        description: "",
    
    },
    IsGameTypeSupported: {
        completion: "native IsGameTypeSupported takes gametype whichGameType returns boolean",
        description: "",
        parameters: [
            { label: 'gametype', name: 'whichGameType', documentation: "" },
      ],
    
    },
    GetGameTypeSelected: {
        completion: "native GetGameTypeSelected takes nothing returns gametype",
        description: "",
    
    },
    IsMapFlagSet: {
        completion: "native IsMapFlagSet takes mapflag whichMapFlag returns boolean",
        description: "",
        parameters: [
            { label: 'mapflag', name: 'whichMapFlag', documentation: "" },
      ],
    
    },
    GetGamePlacement: {
        completion: "constant native GetGamePlacement takes nothing returns placement",
        description: "",
    
    },
    GetGameSpeed: {
        completion: "constant native GetGameSpeed takes nothing returns gamespeed",
        description: "",
    
    },
    GetGameDifficulty: {
        completion: "constant native GetGameDifficulty takes nothing returns gamedifficulty",
        description: "",
    
    },
    GetResourceDensity: {
        completion: "constant native GetResourceDensity takes nothing returns mapdensity",
        description: "",
    
    },
    GetCreatureDensity: {
        completion: "constant native GetCreatureDensity takes nothing returns mapdensity",
        description: "",
    
    },
    GetStartLocationX: {
        completion: "constant native GetStartLocationX takes integer whichStartLocation returns real",
        description: "",
        parameters: [
            { label: 'integer', name: 'whichStartLocation', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetStartLocationY: {
        completion: "constant native GetStartLocationY takes integer whichStartLocation returns real",
        description: "",
        parameters: [
            { label: 'integer', name: 'whichStartLocation', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetStartLocationLoc: {
        completion: "constant native GetStartLocationLoc takes integer whichStartLocation returns location",
        description: "",
        parameters: [
            { label: 'integer', name: 'whichStartLocation', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetPlayerTeam: {
        completion: "native SetPlayerTeam takes player whichPlayer, integer whichTeam returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'integer', name: 'whichTeam', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetPlayerStartLocation: {
        completion: "native SetPlayerStartLocation takes player whichPlayer, integer startLocIndex returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'integer', name: 'startLocIndex', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ForcePlayerStartLocation: {
        completion: "native ForcePlayerStartLocation takes player whichPlayer, integer startLocIndex returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'integer', name: 'startLocIndex', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetPlayerColor: {
        completion: "native SetPlayerColor takes player whichPlayer, playercolor color returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'playercolor', name: 'color', documentation: "" },
      ],
    
    },
    SetPlayerAlliance: {
        completion: "native SetPlayerAlliance takes player sourcePlayer, player otherPlayer, alliancetype whichAllianceSetting, boolean value returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'sourcePlayer', documentation: "a single player reference" },
            { label: 'player', name: 'otherPlayer', documentation: "a single player reference" },
            { label: 'alliancetype', name: 'whichAllianceSetting', documentation: "" },
            { label: 'boolean', name: 'value', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetPlayerTaxRate: {
        completion: "native SetPlayerTaxRate takes player sourcePlayer, player otherPlayer, playerstate whichResource, integer rate returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'sourcePlayer', documentation: "a single player reference" },
            { label: 'player', name: 'otherPlayer', documentation: "a single player reference" },
            { label: 'playerstate', name: 'whichResource', documentation: "" },
            { label: 'integer', name: 'rate', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetPlayerRacePreference: {
        completion: "native SetPlayerRacePreference takes player whichPlayer, racepreference whichRacePreference returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'racepreference', name: 'whichRacePreference', documentation: "" },
      ],
    
    },
    SetPlayerRaceSelectable: {
        completion: "native SetPlayerRaceSelectable takes player whichPlayer, boolean value returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'boolean', name: 'value', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetPlayerController: {
        completion: "native SetPlayerController takes player whichPlayer, mapcontrol controlType returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'mapcontrol', name: 'controlType', documentation: "" },
      ],
    
    },
    SetPlayerName: {
        completion: "native SetPlayerName takes player whichPlayer, string name returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'string', name: 'name', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SetPlayerOnScoreScreen: {
        completion: "native SetPlayerOnScoreScreen takes player whichPlayer, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetPlayerTeam: {
        completion: "native GetPlayerTeam takes player whichPlayer returns integer",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    GetPlayerStartLocation: {
        completion: "native GetPlayerStartLocation takes player whichPlayer returns integer",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    GetPlayerColor: {
        completion: "native GetPlayerColor takes player whichPlayer returns playercolor",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    GetPlayerSelectable: {
        completion: "native GetPlayerSelectable takes player whichPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    GetPlayerController: {
        completion: "native GetPlayerController takes player whichPlayer returns mapcontrol",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    GetPlayerSlotState: {
        completion: "native GetPlayerSlotState takes player whichPlayer returns playerslotstate",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    GetPlayerTaxRate: {
        completion: "native GetPlayerTaxRate takes player sourcePlayer, player otherPlayer, playerstate whichResource returns integer",
        description: "",
        parameters: [
            { label: 'player', name: 'sourcePlayer', documentation: "a single player reference" },
            { label: 'player', name: 'otherPlayer', documentation: "a single player reference" },
            { label: 'playerstate', name: 'whichResource', documentation: "" },
      ],
    
    },
    IsPlayerRacePrefSet: {
        completion: "native IsPlayerRacePrefSet takes player whichPlayer, racepreference pref returns boolean",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'racepreference', name: 'pref', documentation: "" },
      ],
    
    },
    GetPlayerName: {
        completion: "native GetPlayerName takes player whichPlayer returns string",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    CreateTimer: {
        completion: "native CreateTimer takes nothing returns timer",
        description: "",
    
    },
    DestroyTimer: {
        completion: "native DestroyTimer takes timer whichTimer returns nothing",
        description: "",
        parameters: [
            { label: 'timer', name: 'whichTimer', documentation: "a timer reference" },
      ],
    
    },
    TimerStart: {
        completion: "native TimerStart takes timer whichTimer, real timeout, boolean periodic, code handlerFunc returns nothing",
        description: "",
        parameters: [
            { label: 'timer', name: 'whichTimer', documentation: "a timer reference" },
            { label: 'real', name: 'timeout', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'periodic', documentation: "boolean variables can take the values true of false" },
            { label: 'code', name: 'handlerFunc', documentation: "a function may have parameter that are of type code" },
      ],
    
    },
    TimerGetElapsed: {
        completion: "native TimerGetElapsed takes timer whichTimer returns real",
        description: "",
        parameters: [
            { label: 'timer', name: 'whichTimer', documentation: "a timer reference" },
      ],
    
    },
    TimerGetRemaining: {
        completion: "native TimerGetRemaining takes timer whichTimer returns real",
        description: "",
        parameters: [
            { label: 'timer', name: 'whichTimer', documentation: "a timer reference" },
      ],
    
    },
    TimerGetTimeout: {
        completion: "native TimerGetTimeout takes timer whichTimer returns real",
        description: "",
        parameters: [
            { label: 'timer', name: 'whichTimer', documentation: "a timer reference" },
      ],
    
    },
    PauseTimer: {
        completion: "native PauseTimer takes timer whichTimer returns nothing",
        description: "",
        parameters: [
            { label: 'timer', name: 'whichTimer', documentation: "a timer reference" },
      ],
    
    },
    ResumeTimer: {
        completion: "native ResumeTimer takes timer whichTimer returns nothing",
        description: "",
        parameters: [
            { label: 'timer', name: 'whichTimer', documentation: "a timer reference" },
      ],
    
    },
    GetExpiredTimer: {
        completion: "native GetExpiredTimer takes nothing returns timer",
        description: "",
    
    },
    CreateGroup: {
        completion: "native CreateGroup takes nothing returns group",
        description: "",
    
    },
    DestroyGroup: {
        completion: "native DestroyGroup takes group whichGroup returns nothing",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
      ],
    
    },
    GroupAddUnit: {
        completion: "native GroupAddUnit takes group whichGroup, unit whichUnit returns nothing",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GroupRemoveUnit: {
        completion: "native GroupRemoveUnit takes group whichGroup, unit whichUnit returns nothing",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GroupClear: {
        completion: "native GroupClear takes group whichGroup returns nothing",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
      ],
    
    },
    GroupEnumUnitsOfType: {
        completion: "native GroupEnumUnitsOfType takes group whichGroup, string unitname, boolexpr filter returns nothing",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'string', name: 'unitname', documentation: "strings variables hold a series of characters" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
      ],
    
    },
    GroupEnumUnitsOfPlayer: {
        completion: "native GroupEnumUnitsOfPlayer takes group whichGroup, player whichPlayer, boolexpr filter returns nothing",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
      ],
    
    },
    GroupEnumUnitsOfTypeCounted: {
        completion: "native GroupEnumUnitsOfTypeCounted takes group whichGroup, string unitname, boolexpr filter, integer countLimit returns nothing",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'string', name: 'unitname', documentation: "strings variables hold a series of characters" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
            { label: 'integer', name: 'countLimit', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GroupEnumUnitsInRect: {
        completion: "native GroupEnumUnitsInRect takes group whichGroup, rect r, boolexpr filter returns nothing",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'rect', name: 'r', documentation: "" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
      ],
    
    },
    GroupEnumUnitsInRectCounted: {
        completion: "native GroupEnumUnitsInRectCounted takes group whichGroup, rect r, boolexpr filter, integer countLimit returns nothing",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'rect', name: 'r', documentation: "" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
            { label: 'integer', name: 'countLimit', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GroupEnumUnitsInRange: {
        completion: "native GroupEnumUnitsInRange takes group whichGroup, real x, real y, real radius, boolexpr filter returns nothing",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
      ],
    
    },
    GroupEnumUnitsInRangeOfLoc: {
        completion: "native GroupEnumUnitsInRangeOfLoc takes group whichGroup, location whichLocation, real radius, boolexpr filter returns nothing",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'location', name: 'whichLocation', documentation: "" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
      ],
    
    },
    GroupEnumUnitsInRangeCounted: {
        completion: "native GroupEnumUnitsInRangeCounted takes group whichGroup, real x, real y, real radius, boolexpr filter, integer countLimit returns nothing",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
            { label: 'integer', name: 'countLimit', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GroupEnumUnitsInRangeOfLocCounted: {
        completion: "native GroupEnumUnitsInRangeOfLocCounted takes group whichGroup, location whichLocation, real radius, boolexpr filter, integer countLimit returns nothing",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'location', name: 'whichLocation', documentation: "" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
            { label: 'integer', name: 'countLimit', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GroupEnumUnitsSelected: {
        completion: "native GroupEnumUnitsSelected takes group whichGroup, player whichPlayer, boolexpr filter returns nothing",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
      ],
    
    },
    GroupImmediateOrder: {
        completion: "native GroupImmediateOrder takes group whichGroup, string order returns boolean",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'string', name: 'order', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    GroupImmediateOrderById: {
        completion: "native GroupImmediateOrderById takes group whichGroup, integer order returns boolean",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'integer', name: 'order', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GroupPointOrder: {
        completion: "native GroupPointOrder takes group whichGroup, string order, real x, real y returns boolean",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'string', name: 'order', documentation: "strings variables hold a series of characters" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GroupPointOrderLoc: {
        completion: "native GroupPointOrderLoc takes group whichGroup, string order, location whichLocation returns boolean",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'string', name: 'order', documentation: "strings variables hold a series of characters" },
            { label: 'location', name: 'whichLocation', documentation: "" },
      ],
    
    },
    GroupPointOrderById: {
        completion: "native GroupPointOrderById takes group whichGroup, integer order, real x, real y returns boolean",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'integer', name: 'order', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GroupPointOrderByIdLoc: {
        completion: "native GroupPointOrderByIdLoc takes group whichGroup, integer order, location whichLocation returns boolean",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'integer', name: 'order', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'location', name: 'whichLocation', documentation: "" },
      ],
    
    },
    GroupTargetOrder: {
        completion: "native GroupTargetOrder takes group whichGroup, string order, widget targetWidget returns boolean",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'string', name: 'order', documentation: "strings variables hold a series of characters" },
            { label: 'widget', name: 'targetWidget', documentation: "an interactive game object with life" },
      ],
    
    },
    GroupTargetOrderById: {
        completion: "native GroupTargetOrderById takes group whichGroup, integer order, widget targetWidget returns boolean",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'integer', name: 'order', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'widget', name: 'targetWidget', documentation: "an interactive game object with life" },
      ],
    
    },
    ForGroup: {
        completion: "native ForGroup takes group whichGroup, code callback returns nothing",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
            { label: 'code', name: 'callback', documentation: "a function may have parameter that are of type code" },
      ],
    
    },
    FirstOfGroup: {
        completion: "native FirstOfGroup takes group whichGroup returns unit",
        description: "",
        parameters: [
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
      ],
    
    },
    CreateForce: {
        completion: "native CreateForce takes nothing returns force",
        description: "",
    
    },
    DestroyForce: {
        completion: "native DestroyForce takes force whichForce returns nothing",
        description: "",
        parameters: [
            { label: 'force', name: 'whichForce', documentation: "a collection of players" },
      ],
    
    },
    ForceAddPlayer: {
        completion: "native ForceAddPlayer takes force whichForce, player whichPlayer returns nothing",
        description: "",
        parameters: [
            { label: 'force', name: 'whichForce', documentation: "a collection of players" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    ForceRemovePlayer: {
        completion: "native ForceRemovePlayer takes force whichForce, player whichPlayer returns nothing",
        description: "",
        parameters: [
            { label: 'force', name: 'whichForce', documentation: "a collection of players" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    ForceClear: {
        completion: "native ForceClear takes force whichForce returns nothing",
        description: "",
        parameters: [
            { label: 'force', name: 'whichForce', documentation: "a collection of players" },
      ],
    
    },
    ForceEnumPlayers: {
        completion: "native ForceEnumPlayers takes force whichForce, boolexpr filter returns nothing",
        description: "",
        parameters: [
            { label: 'force', name: 'whichForce', documentation: "a collection of players" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
      ],
    
    },
    ForceEnumPlayersCounted: {
        completion: "native ForceEnumPlayersCounted takes force whichForce, boolexpr filter, integer countLimit returns nothing",
        description: "",
        parameters: [
            { label: 'force', name: 'whichForce', documentation: "a collection of players" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
            { label: 'integer', name: 'countLimit', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ForceEnumAllies: {
        completion: "native ForceEnumAllies takes force whichForce, player whichPlayer, boolexpr filter returns nothing",
        description: "",
        parameters: [
            { label: 'force', name: 'whichForce', documentation: "a collection of players" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
      ],
    
    },
    ForceEnumEnemies: {
        completion: "native ForceEnumEnemies takes force whichForce, player whichPlayer, boolexpr filter returns nothing",
        description: "",
        parameters: [
            { label: 'force', name: 'whichForce', documentation: "a collection of players" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
      ],
    
    },
    ForForce: {
        completion: "native ForForce takes force whichForce, code callback returns nothing",
        description: "",
        parameters: [
            { label: 'force', name: 'whichForce', documentation: "a collection of players" },
            { label: 'code', name: 'callback', documentation: "a function may have parameter that are of type code" },
      ],
    
    },
    Rect: {
        completion: "native Rect takes real minx, real miny, real maxx, real maxy returns rect",
        description: "",
        parameters: [
            { label: 'real', name: 'minx', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'miny', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'maxx', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'maxy', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    RectFromLoc: {
        completion: "native RectFromLoc takes location min, location max returns rect",
        description: "",
        parameters: [
            { label: 'location', name: 'min', documentation: "" },
            { label: 'location', name: 'max', documentation: "" },
      ],
    
    },
    RemoveRect: {
        completion: "native RemoveRect takes rect whichRect returns nothing",
        description: "",
        parameters: [
            { label: 'rect', name: 'whichRect', documentation: "" },
      ],
    
    },
    SetRect: {
        completion: "native SetRect takes rect whichRect, real minx, real miny, real maxx, real maxy returns nothing",
        description: "",
        parameters: [
            { label: 'rect', name: 'whichRect', documentation: "" },
            { label: 'real', name: 'minx', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'miny', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'maxx', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'maxy', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetRectFromLoc: {
        completion: "native SetRectFromLoc takes rect whichRect, location min, location max returns nothing",
        description: "",
        parameters: [
            { label: 'rect', name: 'whichRect', documentation: "" },
            { label: 'location', name: 'min', documentation: "" },
            { label: 'location', name: 'max', documentation: "" },
      ],
    
    },
    MoveRectTo: {
        completion: "native MoveRectTo takes rect whichRect, real newCenterX, real newCenterY returns nothing",
        description: "",
        parameters: [
            { label: 'rect', name: 'whichRect', documentation: "" },
            { label: 'real', name: 'newCenterX', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'newCenterY', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    MoveRectToLoc: {
        completion: "native MoveRectToLoc takes rect whichRect, location newCenterLoc returns nothing",
        description: "",
        parameters: [
            { label: 'rect', name: 'whichRect', documentation: "" },
            { label: 'location', name: 'newCenterLoc', documentation: "" },
      ],
    
    },
    GetRectCenterX: {
        completion: "native GetRectCenterX takes rect whichRect returns real",
        description: "",
        parameters: [
            { label: 'rect', name: 'whichRect', documentation: "" },
      ],
    
    },
    GetRectCenterY: {
        completion: "native GetRectCenterY takes rect whichRect returns real",
        description: "",
        parameters: [
            { label: 'rect', name: 'whichRect', documentation: "" },
      ],
    
    },
    GetRectMinX: {
        completion: "native GetRectMinX takes rect whichRect returns real",
        description: "",
        parameters: [
            { label: 'rect', name: 'whichRect', documentation: "" },
      ],
    
    },
    GetRectMinY: {
        completion: "native GetRectMinY takes rect whichRect returns real",
        description: "",
        parameters: [
            { label: 'rect', name: 'whichRect', documentation: "" },
      ],
    
    },
    GetRectMaxX: {
        completion: "native GetRectMaxX takes rect whichRect returns real",
        description: "",
        parameters: [
            { label: 'rect', name: 'whichRect', documentation: "" },
      ],
    
    },
    GetRectMaxY: {
        completion: "native GetRectMaxY takes rect whichRect returns real",
        description: "",
        parameters: [
            { label: 'rect', name: 'whichRect', documentation: "" },
      ],
    
    },
    CreateRegion: {
        completion: "native CreateRegion takes nothing returns region",
        description: "",
    
    },
    RemoveRegion: {
        completion: "native RemoveRegion takes region whichRegion returns nothing",
        description: "",
        parameters: [
            { label: 'region', name: 'whichRegion', documentation: "" },
      ],
    
    },
    RegionAddRect: {
        completion: "native RegionAddRect takes region whichRegion, rect r returns nothing",
        description: "",
        parameters: [
            { label: 'region', name: 'whichRegion', documentation: "" },
            { label: 'rect', name: 'r', documentation: "" },
      ],
    
    },
    RegionClearRect: {
        completion: "native RegionClearRect takes region whichRegion, rect r returns nothing",
        description: "",
        parameters: [
            { label: 'region', name: 'whichRegion', documentation: "" },
            { label: 'rect', name: 'r', documentation: "" },
      ],
    
    },
    RegionAddCell: {
        completion: "native RegionAddCell takes region whichRegion, real x, real y returns nothing",
        description: "",
        parameters: [
            { label: 'region', name: 'whichRegion', documentation: "" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    RegionAddCellAtLoc: {
        completion: "native RegionAddCellAtLoc takes region whichRegion, location whichLocation returns nothing",
        description: "",
        parameters: [
            { label: 'region', name: 'whichRegion', documentation: "" },
            { label: 'location', name: 'whichLocation', documentation: "" },
      ],
    
    },
    RegionClearCell: {
        completion: "native RegionClearCell takes region whichRegion, real x, real y returns nothing",
        description: "",
        parameters: [
            { label: 'region', name: 'whichRegion', documentation: "" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    RegionClearCellAtLoc: {
        completion: "native RegionClearCellAtLoc takes region whichRegion, location whichLocation returns nothing",
        description: "",
        parameters: [
            { label: 'region', name: 'whichRegion', documentation: "" },
            { label: 'location', name: 'whichLocation', documentation: "" },
      ],
    
    },
    Location: {
        completion: "native Location takes real x, real y returns location",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    RemoveLocation: {
        completion: "native RemoveLocation takes location whichLocation returns nothing",
        description: "",
        parameters: [
            { label: 'location', name: 'whichLocation', documentation: "" },
      ],
    
    },
    MoveLocation: {
        completion: "native MoveLocation takes location whichLocation, real newX, real newY returns nothing",
        description: "",
        parameters: [
            { label: 'location', name: 'whichLocation', documentation: "" },
            { label: 'real', name: 'newX', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'newY', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetLocationX: {
        completion: "native GetLocationX takes location whichLocation returns real",
        description: "",
        parameters: [
            { label: 'location', name: 'whichLocation', documentation: "" },
      ],
    
    },
    GetLocationY: {
        completion: "native GetLocationY takes location whichLocation returns real",
        description: "",
        parameters: [
            { label: 'location', name: 'whichLocation', documentation: "" },
      ],
    
    },
    GetLocationZ: {
        completion: "native GetLocationZ takes location whichLocation returns real",
        description: "",
        parameters: [
            { label: 'location', name: 'whichLocation', documentation: "" },
      ],
    
    },
    IsUnitInRegion: {
        completion: "native IsUnitInRegion takes region whichRegion, unit whichUnit returns boolean",
        description: "",
        parameters: [
            { label: 'region', name: 'whichRegion', documentation: "" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    IsPointInRegion: {
        completion: "native IsPointInRegion takes region whichRegion, real x, real y returns boolean",
        description: "",
        parameters: [
            { label: 'region', name: 'whichRegion', documentation: "" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    IsLocationInRegion: {
        completion: "native IsLocationInRegion takes region whichRegion, location whichLocation returns boolean",
        description: "",
        parameters: [
            { label: 'region', name: 'whichRegion', documentation: "" },
            { label: 'location', name: 'whichLocation', documentation: "" },
      ],
    
    },
    GetWorldBounds: {
        completion: "native GetWorldBounds takes nothing returns rect",
        description: "",
    
    },
    CreateTrigger: {
        completion: "native CreateTrigger takes nothing returns trigger",
        description: "",
    
    },
    DestroyTrigger: {
        completion: "native DestroyTrigger takes trigger whichTrigger returns nothing",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
      ],
    
    },
    ResetTrigger: {
        completion: "native ResetTrigger takes trigger whichTrigger returns nothing",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
      ],
    
    },
    EnableTrigger: {
        completion: "native EnableTrigger takes trigger whichTrigger returns nothing",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
      ],
    
    },
    DisableTrigger: {
        completion: "native DisableTrigger takes trigger whichTrigger returns nothing",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
      ],
    
    },
    IsTriggerEnabled: {
        completion: "native IsTriggerEnabled takes trigger whichTrigger returns boolean",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
      ],
    
    },
    TriggerWaitOnSleeps: {
        completion: "native TriggerWaitOnSleeps takes trigger whichTrigger, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    IsTriggerWaitOnSleeps: {
        completion: "native IsTriggerWaitOnSleeps takes trigger whichTrigger returns boolean",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
      ],
    
    },
    GetFilterUnit: {
        completion: "constant native GetFilterUnit takes nothing returns unit",
        description: "",
    
    },
    GetEnumUnit: {
        completion: "constant native GetEnumUnit takes nothing returns unit",
        description: "",
    
    },
    GetFilterDestructable: {
        completion: "constant native GetFilterDestructable takes nothing returns destructable",
        description: "",
    
    },
    GetEnumDestructable: {
        completion: "constant native GetEnumDestructable takes nothing returns destructable",
        description: "",
    
    },
    GetFilterItem: {
        completion: "constant native GetFilterItem takes nothing returns item",
        description: "",
    
    },
    GetEnumItem: {
        completion: "constant native GetEnumItem takes nothing returns item",
        description: "",
    
    },
    GetFilterPlayer: {
        completion: "constant native GetFilterPlayer takes nothing returns player",
        description: "",
    
    },
    GetEnumPlayer: {
        completion: "constant native GetEnumPlayer takes nothing returns player",
        description: "",
    
    },
    GetTriggeringTrigger: {
        completion: "constant native GetTriggeringTrigger takes nothing returns trigger",
        description: "",
    
    },
    GetTriggerEventId: {
        completion: "constant native GetTriggerEventId takes nothing returns eventid",
        description: "",
    
    },
    GetTriggerEvalCount: {
        completion: "constant native GetTriggerEvalCount takes trigger whichTrigger returns integer",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
      ],
    
    },
    GetTriggerExecCount: {
        completion: "constant native GetTriggerExecCount takes trigger whichTrigger returns integer",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
      ],
    
    },
    ExecuteFunc: {
        completion: "native ExecuteFunc takes string funcName returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'funcName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    And: {
        completion: "native And takes boolexpr operandA, boolexpr operandB returns boolexpr",
        description: "",
        parameters: [
            { label: 'boolexpr', name: 'operandA', documentation: "" },
            { label: 'boolexpr', name: 'operandB', documentation: "" },
      ],
    
    },
    Or: {
        completion: "native Or takes boolexpr operandA, boolexpr operandB returns boolexpr",
        description: "",
        parameters: [
            { label: 'boolexpr', name: 'operandA', documentation: "" },
            { label: 'boolexpr', name: 'operandB', documentation: "" },
      ],
    
    },
    Not: {
        completion: "native Not takes boolexpr operand returns boolexpr",
        description: "",
        parameters: [
            { label: 'boolexpr', name: 'operand', documentation: "" },
      ],
    
    },
    Condition: {
        completion: "native Condition takes code func returns conditionfunc",
        description: "",
        parameters: [
            { label: 'code', name: 'func', documentation: "a function may have parameter that are of type code" },
      ],
    
    },
    DestroyCondition: {
        completion: "native DestroyCondition takes conditionfunc c returns nothing",
        description: "",
        parameters: [
            { label: 'conditionfunc', name: 'c', documentation: "" },
      ],
    
    },
    Filter: {
        completion: "native Filter takes code func returns filterfunc",
        description: "",
        parameters: [
            { label: 'code', name: 'func', documentation: "a function may have parameter that are of type code" },
      ],
    
    },
    DestroyFilter: {
        completion: "native DestroyFilter takes filterfunc f returns nothing",
        description: "",
        parameters: [
            { label: 'filterfunc', name: 'f', documentation: "" },
      ],
    
    },
    DestroyBoolExpr: {
        completion: "native DestroyBoolExpr takes boolexpr e returns nothing",
        description: "",
        parameters: [
            { label: 'boolexpr', name: 'e', documentation: "" },
      ],
    
    },
    TriggerRegisterVariableEvent: {
        completion: "native TriggerRegisterVariableEvent takes trigger whichTrigger, string varName, limitop opcode, real limitval returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'string', name: 'varName', documentation: "strings variables hold a series of characters" },
            { label: 'limitop', name: 'opcode', documentation: "" },
            { label: 'real', name: 'limitval', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    TriggerRegisterTimerEvent: {
        completion: "native TriggerRegisterTimerEvent takes trigger whichTrigger, real timeout, boolean periodic returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'real', name: 'timeout', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'periodic', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    TriggerRegisterTimerExpireEvent: {
        completion: "native TriggerRegisterTimerExpireEvent takes trigger whichTrigger, timer t returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'timer', name: 't', documentation: "a timer reference" },
      ],
    
    },
    TriggerRegisterGameStateEvent: {
        completion: "native TriggerRegisterGameStateEvent takes trigger whichTrigger, gamestate whichState, limitop opcode, real limitval returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'gamestate', name: 'whichState', documentation: "" },
            { label: 'limitop', name: 'opcode', documentation: "" },
            { label: 'real', name: 'limitval', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    TriggerRegisterDialogEvent: {
        completion: "native TriggerRegisterDialogEvent takes trigger whichTrigger, dialog whichDialog returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'dialog', name: 'whichDialog', documentation: "" },
      ],
    
    },
    TriggerRegisterDialogButtonEvent: {
        completion: "native TriggerRegisterDialogButtonEvent takes trigger whichTrigger, button whichButton returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'button', name: 'whichButton', documentation: "" },
      ],
    
    },
    GetEventGameState: {
        completion: "constant native GetEventGameState takes nothing returns gamestate",
        description: "",
    
    },
    TriggerRegisterGameEvent: {
        completion: "native TriggerRegisterGameEvent takes trigger whichTrigger, gameevent whichGameEvent returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'gameevent', name: 'whichGameEvent', documentation: "" },
      ],
    
    },
    GetWinningPlayer: {
        completion: "constant native GetWinningPlayer takes nothing returns player",
        description: "",
    
    },
    TriggerRegisterEnterRegion: {
        completion: "native TriggerRegisterEnterRegion takes trigger whichTrigger, region whichRegion, boolexpr filter returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'region', name: 'whichRegion', documentation: "" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
      ],
    
    },
    GetTriggeringRegion: {
        completion: "constant native GetTriggeringRegion takes nothing returns region",
        description: "",
    
    },
    GetEnteringUnit: {
        completion: "constant native GetEnteringUnit takes nothing returns unit",
        description: "",
    
    },
    TriggerRegisterLeaveRegion: {
        completion: "native TriggerRegisterLeaveRegion takes trigger whichTrigger, region whichRegion, boolexpr filter returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'region', name: 'whichRegion', documentation: "" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
      ],
    
    },
    GetLeavingUnit: {
        completion: "constant native GetLeavingUnit takes nothing returns unit",
        description: "",
    
    },
    TriggerRegisterTrackableHitEvent: {
        completion: "native TriggerRegisterTrackableHitEvent takes trigger whichTrigger, trackable t returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'trackable', name: 't', documentation: "" },
      ],
    
    },
    TriggerRegisterTrackableTrackEvent: {
        completion: "native TriggerRegisterTrackableTrackEvent takes trigger whichTrigger, trackable t returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'trackable', name: 't', documentation: "" },
      ],
    
    },
    GetTriggeringTrackable: {
        completion: "constant native GetTriggeringTrackable takes nothing returns trackable",
        description: "",
    
    },
    GetClickedButton: {
        completion: "constant native GetClickedButton takes nothing returns button",
        description: "",
    
    },
    GetClickedDialog: {
        completion: "constant native GetClickedDialog takes nothing returns dialog",
        description: "",
    
    },
    GetTournamentFinishSoonTimeRemaining: {
        completion: "constant native GetTournamentFinishSoonTimeRemaining takes nothing returns real",
        description: "",
    
    },
    GetTournamentFinishNowRule: {
        completion: "constant native GetTournamentFinishNowRule takes nothing returns integer",
        description: "",
    
    },
    GetTournamentFinishNowPlayer: {
        completion: "constant native GetTournamentFinishNowPlayer takes nothing returns player",
        description: "",
    
    },
    GetTournamentScore: {
        completion: "constant native GetTournamentScore takes player whichPlayer returns integer",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    GetSaveBasicFilename: {
        completion: "constant native GetSaveBasicFilename takes nothing returns string",
        description: "",
    
    },
    TriggerRegisterPlayerEvent: {
        completion: "native TriggerRegisterPlayerEvent takes trigger whichTrigger, player whichPlayer, playerevent whichPlayerEvent returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'playerevent', name: 'whichPlayerEvent', documentation: "" },
      ],
    
    },
    GetTriggerPlayer: {
        completion: "constant native GetTriggerPlayer takes nothing returns player",
        description: "",
    
    },
    TriggerRegisterPlayerUnitEvent: {
        completion: "native TriggerRegisterPlayerUnitEvent takes trigger whichTrigger, player whichPlayer, playerunitevent whichPlayerUnitEvent, boolexpr filter returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'playerunitevent', name: 'whichPlayerUnitEvent', documentation: "" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
      ],
    
    },
    GetLevelingUnit: {
        completion: "constant native GetLevelingUnit takes nothing returns unit",
        description: "",
    
    },
    GetLearningUnit: {
        completion: "constant native GetLearningUnit takes nothing returns unit",
        description: "",
    
    },
    GetLearnedSkill: {
        completion: "constant native GetLearnedSkill takes nothing returns integer",
        description: "",
    
    },
    GetLearnedSkillLevel: {
        completion: "constant native GetLearnedSkillLevel takes nothing returns integer",
        description: "",
    
    },
    GetRevivableUnit: {
        completion: "constant native GetRevivableUnit takes nothing returns unit",
        description: "",
    
    },
    GetRevivingUnit: {
        completion: "constant native GetRevivingUnit takes nothing returns unit",
        description: "",
    
    },
    GetAttacker: {
        completion: "constant native GetAttacker takes nothing returns unit",
        description: "",
    
    },
    GetRescuer: {
        completion: "constant native GetRescuer takes nothing returns unit",
        description: "",
    
    },
    GetDyingUnit: {
        completion: "constant native GetDyingUnit takes nothing returns unit",
        description: "",
    
    },
    GetKillingUnit: {
        completion: "constant native GetKillingUnit takes nothing returns unit",
        description: "",
    
    },
    GetDecayingUnit: {
        completion: "constant native GetDecayingUnit takes nothing returns unit",
        description: "",
    
    },
    GetConstructingStructure: {
        completion: "constant native GetConstructingStructure takes nothing returns unit",
        description: "",
    
    },
    GetCancelledStructure: {
        completion: "constant native GetCancelledStructure takes nothing returns unit",
        description: "",
    
    },
    GetConstructedStructure: {
        completion: "constant native GetConstructedStructure takes nothing returns unit",
        description: "",
    
    },
    GetResearchingUnit: {
        completion: "constant native GetResearchingUnit takes nothing returns unit",
        description: "",
    
    },
    GetResearched: {
        completion: "constant native GetResearched takes nothing returns integer",
        description: "",
    
    },
    GetTrainedUnitType: {
        completion: "constant native GetTrainedUnitType takes nothing returns integer",
        description: "",
    
    },
    GetTrainedUnit: {
        completion: "constant native GetTrainedUnit takes nothing returns unit",
        description: "",
    
    },
    GetDetectedUnit: {
        completion: "constant native GetDetectedUnit takes nothing returns unit",
        description: "",
    
    },
    GetSummoningUnit: {
        completion: "constant native GetSummoningUnit takes nothing returns unit",
        description: "",
    
    },
    GetSummonedUnit: {
        completion: "constant native GetSummonedUnit takes nothing returns unit",
        description: "",
    
    },
    GetTransportUnit: {
        completion: "constant native GetTransportUnit takes nothing returns unit",
        description: "",
    
    },
    GetLoadedUnit: {
        completion: "constant native GetLoadedUnit takes nothing returns unit",
        description: "",
    
    },
    GetSellingUnit: {
        completion: "constant native GetSellingUnit takes nothing returns unit",
        description: "",
    
    },
    GetSoldUnit: {
        completion: "constant native GetSoldUnit takes nothing returns unit",
        description: "",
    
    },
    GetBuyingUnit: {
        completion: "constant native GetBuyingUnit takes nothing returns unit",
        description: "",
    
    },
    GetSoldItem: {
        completion: "constant native GetSoldItem takes nothing returns item",
        description: "",
    
    },
    GetChangingUnit: {
        completion: "constant native GetChangingUnit takes nothing returns unit",
        description: "",
    
    },
    GetChangingUnitPrevOwner: {
        completion: "constant native GetChangingUnitPrevOwner takes nothing returns player",
        description: "",
    
    },
    GetManipulatingUnit: {
        completion: "constant native GetManipulatingUnit takes nothing returns unit",
        description: "",
    
    },
    GetManipulatedItem: {
        completion: "constant native GetManipulatedItem takes nothing returns item",
        description: "",
    
    },
    GetOrderedUnit: {
        completion: "constant native GetOrderedUnit takes nothing returns unit",
        description: "",
    
    },
    GetIssuedOrderId: {
        completion: "constant native GetIssuedOrderId takes nothing returns integer",
        description: "",
    
    },
    GetOrderPointX: {
        completion: "constant native GetOrderPointX takes nothing returns real",
        description: "",
    
    },
    GetOrderPointY: {
        completion: "constant native GetOrderPointY takes nothing returns real",
        description: "",
    
    },
    GetOrderPointLoc: {
        completion: "constant native GetOrderPointLoc takes nothing returns location",
        description: "",
    
    },
    GetOrderTarget: {
        completion: "constant native GetOrderTarget takes nothing returns widget",
        description: "",
    
    },
    GetOrderTargetDestructable: {
        completion: "constant native GetOrderTargetDestructable takes nothing returns destructable",
        description: "",
    
    },
    GetOrderTargetItem: {
        completion: "constant native GetOrderTargetItem takes nothing returns item",
        description: "",
    
    },
    GetOrderTargetUnit: {
        completion: "constant native GetOrderTargetUnit takes nothing returns unit",
        description: "",
    
    },
    GetSpellAbilityUnit: {
        completion: "constant native GetSpellAbilityUnit takes nothing returns unit",
        description: "",
    
    },
    GetSpellAbilityId: {
        completion: "constant native GetSpellAbilityId takes nothing returns integer",
        description: "",
    
    },
    GetSpellAbility: {
        completion: "constant native GetSpellAbility takes nothing returns ability",
        description: "",
    
    },
    GetSpellTargetLoc: {
        completion: "constant native GetSpellTargetLoc takes nothing returns location",
        description: "",
    
    },
    GetSpellTargetX: {
        completion: "constant native GetSpellTargetX				takes nothing returns real",
        description: "",
    },
    GetSpellTargetY: {
        completion: "constant native GetSpellTargetY				takes nothing returns real",
        description: "",
    },
    GetSpellTargetDestructable: {
        completion: "constant native GetSpellTargetDestructable takes nothing returns destructable",
        description: "",
    
    },
    GetSpellTargetItem: {
        completion: "constant native GetSpellTargetItem takes nothing returns item",
        description: "",
    
    },
    GetSpellTargetUnit: {
        completion: "constant native GetSpellTargetUnit takes nothing returns unit",
        description: "",
    
    },
    TriggerRegisterPlayerAllianceChange: {
        completion: "native TriggerRegisterPlayerAllianceChange takes trigger whichTrigger, player whichPlayer, alliancetype whichAlliance returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'alliancetype', name: 'whichAlliance', documentation: "" },
      ],
    
    },
    TriggerRegisterPlayerStateEvent: {
        completion: "native TriggerRegisterPlayerStateEvent takes trigger whichTrigger, player whichPlayer, playerstate whichState, limitop opcode, real limitval returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'playerstate', name: 'whichState', documentation: "" },
            { label: 'limitop', name: 'opcode', documentation: "" },
            { label: 'real', name: 'limitval', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetEventPlayerState: {
        completion: "constant native GetEventPlayerState takes nothing returns playerstate",
        description: "",
    
    },
    TriggerRegisterPlayerChatEvent: {
        completion: "native TriggerRegisterPlayerChatEvent takes trigger whichTrigger, player whichPlayer, string chatMessageToDetect, boolean exactMatchOnly returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'string', name: 'chatMessageToDetect', documentation: "strings variables hold a series of characters" },
            { label: 'boolean', name: 'exactMatchOnly', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetEventPlayerChatString: {
        completion: "constant native GetEventPlayerChatString takes nothing returns string",
        description: "",
    
    },
    GetEventPlayerChatStringMatched: {
        completion: "constant native GetEventPlayerChatStringMatched takes nothing returns string",
        description: "",
    
    },
    TriggerRegisterDeathEvent: {
        completion: "native TriggerRegisterDeathEvent takes trigger whichTrigger, widget whichWidget returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'widget', name: 'whichWidget', documentation: "an interactive game object with life" },
      ],
    
    },
    GetTriggerUnit: {
        completion: "constant native GetTriggerUnit takes nothing returns unit",
        description: "",
    
    },
    TriggerRegisterUnitStateEvent: {
        completion: "native TriggerRegisterUnitStateEvent takes trigger whichTrigger, unit whichUnit, unitstate whichState, limitop opcode, real limitval returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'unitstate', name: 'whichState', documentation: "" },
            { label: 'limitop', name: 'opcode', documentation: "" },
            { label: 'real', name: 'limitval', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetEventUnitState: {
        completion: "constant native GetEventUnitState takes nothing returns unitstate",
        description: "",
    
    },
    TriggerRegisterUnitEvent: {
        completion: "native TriggerRegisterUnitEvent takes trigger whichTrigger, unit whichUnit, unitevent whichEvent returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'unitevent', name: 'whichEvent', documentation: "" },
      ],
    
    },
    GetEventDamage: {
        completion: "constant native GetEventDamage takes nothing returns real",
        description: "",
    
    },
    GetEventDamageSource: {
        completion: "constant native GetEventDamageSource takes nothing returns unit",
        description: "",
    
    },
    GetEventDetectingPlayer: {
        completion: "constant native GetEventDetectingPlayer takes nothing returns player",
        description: "",
    
    },
    TriggerRegisterFilterUnitEvent: {
        completion: "native TriggerRegisterFilterUnitEvent takes trigger whichTrigger, unit whichUnit, unitevent whichEvent, boolexpr filter returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'unitevent', name: 'whichEvent', documentation: "" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
      ],
    
    },
    GetEventTargetUnit: {
        completion: "constant native GetEventTargetUnit takes nothing returns unit",
        description: "",
    
    },
    TriggerRegisterUnitInRange: {
        completion: "native TriggerRegisterUnitInRange takes trigger whichTrigger, unit whichUnit, real range, boolexpr filter returns event",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'range', documentation: "real variables can hold rational numbers" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
      ],
    
    },
    TriggerAddCondition: {
        completion: "native TriggerAddCondition takes trigger whichTrigger, boolexpr condition returns triggercondition",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'boolexpr', name: 'condition', documentation: "" },
      ],
    
    },
    TriggerRemoveCondition: {
        completion: "native TriggerRemoveCondition takes trigger whichTrigger, triggercondition whichCondition returns nothing",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'triggercondition', name: 'whichCondition', documentation: "" },
      ],
    
    },
    TriggerClearConditions: {
        completion: "native TriggerClearConditions takes trigger whichTrigger returns nothing",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
      ],
    
    },
    TriggerAddAction: {
        completion: "native TriggerAddAction takes trigger whichTrigger, code actionFunc returns triggeraction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'code', name: 'actionFunc', documentation: "a function may have parameter that are of type code" },
      ],
    
    },
    TriggerRemoveAction: {
        completion: "native TriggerRemoveAction takes trigger whichTrigger, triggeraction whichAction returns nothing",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
            { label: 'triggeraction', name: 'whichAction', documentation: "" },
      ],
    
    },
    TriggerClearActions: {
        completion: "native TriggerClearActions takes trigger whichTrigger returns nothing",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
      ],
    
    },
    TriggerSleepAction: {
        completion: "native TriggerSleepAction takes real timeout returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'timeout', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    TriggerWaitForSound: {
        completion: "native TriggerWaitForSound takes sound s, real offset returns nothing",
        description: "",
        parameters: [
            { label: 'sound', name: 's', documentation: "" },
            { label: 'real', name: 'offset', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    TriggerEvaluate: {
        completion: "native TriggerEvaluate takes trigger whichTrigger returns boolean",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
      ],
    
    },
    TriggerExecute: {
        completion: "native TriggerExecute takes trigger whichTrigger returns nothing",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
      ],
    
    },
    TriggerExecuteWait: {
        completion: "native TriggerExecuteWait takes trigger whichTrigger returns nothing",
        description: "",
        parameters: [
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
      ],
    
    },
    TriggerSyncStart: {
        completion: "native TriggerSyncStart takes nothing returns nothing",
        description: "",
    
    },
    TriggerSyncReady: {
        completion: "native TriggerSyncReady takes nothing returns nothing",
        description: "",
    
    },
    GetWidgetLife: {
        completion: "native GetWidgetLife takes widget whichWidget returns real",
        description: "",
        parameters: [
            { label: 'widget', name: 'whichWidget', documentation: "an interactive game object with life" },
      ],
    
    },
    SetWidgetLife: {
        completion: "native SetWidgetLife takes widget whichWidget, real newLife returns nothing",
        description: "",
        parameters: [
            { label: 'widget', name: 'whichWidget', documentation: "an interactive game object with life" },
            { label: 'real', name: 'newLife', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetWidgetX: {
        completion: "native GetWidgetX takes widget whichWidget returns real",
        description: "",
        parameters: [
            { label: 'widget', name: 'whichWidget', documentation: "an interactive game object with life" },
      ],
    
    },
    GetWidgetY: {
        completion: "native GetWidgetY takes widget whichWidget returns real",
        description: "",
        parameters: [
            { label: 'widget', name: 'whichWidget', documentation: "an interactive game object with life" },
      ],
    
    },
    GetTriggerWidget: {
        completion: "constant native GetTriggerWidget takes nothing returns widget",
        description: "",
    
    },
    CreateDestructable: {
        completion: "native CreateDestructable takes integer objectid, real x, real y, real face, real scale, integer variation returns destructable",
        description: "",
        parameters: [
            { label: 'integer', name: 'objectid', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'face', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'scale', documentation: "real variables can hold rational numbers" },
            { label: 'integer', name: 'variation', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    CreateDestructableZ: {
        completion: "native CreateDestructableZ takes integer objectid, real x, real y, real z, real face, real scale, integer variation returns destructable",
        description: "",
        parameters: [
            { label: 'integer', name: 'objectid', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'z', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'face', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'scale', documentation: "real variables can hold rational numbers" },
            { label: 'integer', name: 'variation', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    CreateDeadDestructable: {
        completion: "native CreateDeadDestructable takes integer objectid, real x, real y, real face, real scale, integer variation returns destructable",
        description: "",
        parameters: [
            { label: 'integer', name: 'objectid', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'face', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'scale', documentation: "real variables can hold rational numbers" },
            { label: 'integer', name: 'variation', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    CreateDeadDestructableZ: {
        completion: "native CreateDeadDestructableZ takes integer objectid, real x, real y, real z, real face, real scale, integer variation returns destructable",
        description: "",
        parameters: [
            { label: 'integer', name: 'objectid', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'z', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'face', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'scale', documentation: "real variables can hold rational numbers" },
            { label: 'integer', name: 'variation', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    RemoveDestructable: {
        completion: "native RemoveDestructable takes destructable d returns nothing",
        description: "",
        parameters: [
            { label: 'destructable', name: 'd', documentation: "a single destructable reference" },
      ],
    
    },
    KillDestructable: {
        completion: "native KillDestructable takes destructable d returns nothing",
        description: "",
        parameters: [
            { label: 'destructable', name: 'd', documentation: "a single destructable reference" },
      ],
    
    },
    SetDestructableInvulnerable: {
        completion: "native SetDestructableInvulnerable takes destructable d, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'destructable', name: 'd', documentation: "a single destructable reference" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    IsDestructableInvulnerable: {
        completion: "native IsDestructableInvulnerable takes destructable d returns boolean",
        description: "",
        parameters: [
            { label: 'destructable', name: 'd', documentation: "a single destructable reference" },
      ],
    
    },
    EnumDestructablesInRect: {
        completion: "native EnumDestructablesInRect takes rect r, boolexpr filter, code actionFunc returns nothing",
        description: "",
        parameters: [
            { label: 'rect', name: 'r', documentation: "" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
            { label: 'code', name: 'actionFunc', documentation: "a function may have parameter that are of type code" },
      ],
    
    },
    GetDestructableTypeId: {
        completion: "native GetDestructableTypeId takes destructable d returns integer",
        description: "",
        parameters: [
            { label: 'destructable', name: 'd', documentation: "a single destructable reference" },
      ],
    
    },
    GetDestructableX: {
        completion: "native GetDestructableX takes destructable d returns real",
        description: "",
        parameters: [
            { label: 'destructable', name: 'd', documentation: "a single destructable reference" },
      ],
    
    },
    GetDestructableY: {
        completion: "native GetDestructableY takes destructable d returns real",
        description: "",
        parameters: [
            { label: 'destructable', name: 'd', documentation: "a single destructable reference" },
      ],
    
    },
    SetDestructableLife: {
        completion: "native SetDestructableLife takes destructable d, real life returns nothing",
        description: "",
        parameters: [
            { label: 'destructable', name: 'd', documentation: "a single destructable reference" },
            { label: 'real', name: 'life', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetDestructableLife: {
        completion: "native GetDestructableLife takes destructable d returns real",
        description: "",
        parameters: [
            { label: 'destructable', name: 'd', documentation: "a single destructable reference" },
      ],
    
    },
    SetDestructableMaxLife: {
        completion: "native SetDestructableMaxLife takes destructable d, real max returns nothing",
        description: "",
        parameters: [
            { label: 'destructable', name: 'd', documentation: "a single destructable reference" },
            { label: 'real', name: 'max', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetDestructableMaxLife: {
        completion: "native GetDestructableMaxLife takes destructable d returns real",
        description: "",
        parameters: [
            { label: 'destructable', name: 'd', documentation: "a single destructable reference" },
      ],
    
    },
    DestructableRestoreLife: {
        completion: "native DestructableRestoreLife takes destructable d, real life, boolean birth returns nothing",
        description: "",
        parameters: [
            { label: 'destructable', name: 'd', documentation: "a single destructable reference" },
            { label: 'real', name: 'life', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'birth', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    QueueDestructableAnimation: {
        completion: "native QueueDestructableAnimation takes destructable d, string whichAnimation returns nothing",
        description: "",
        parameters: [
            { label: 'destructable', name: 'd', documentation: "a single destructable reference" },
            { label: 'string', name: 'whichAnimation', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SetDestructableAnimation: {
        completion: "native SetDestructableAnimation takes destructable d, string whichAnimation returns nothing",
        description: "",
        parameters: [
            { label: 'destructable', name: 'd', documentation: "a single destructable reference" },
            { label: 'string', name: 'whichAnimation', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SetDestructableAnimationSpeed: {
        completion: "native SetDestructableAnimationSpeed takes destructable d, real speedFactor returns nothing",
        description: "",
        parameters: [
            { label: 'destructable', name: 'd', documentation: "a single destructable reference" },
            { label: 'real', name: 'speedFactor', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    ShowDestructable: {
        completion: "native ShowDestructable takes destructable d, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'destructable', name: 'd', documentation: "a single destructable reference" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetDestructableOccluderHeight: {
        completion: "native GetDestructableOccluderHeight takes destructable d returns real",
        description: "",
        parameters: [
            { label: 'destructable', name: 'd', documentation: "a single destructable reference" },
      ],
    
    },
    SetDestructableOccluderHeight: {
        completion: "native SetDestructableOccluderHeight takes destructable d, real height returns nothing",
        description: "",
        parameters: [
            { label: 'destructable', name: 'd', documentation: "a single destructable reference" },
            { label: 'real', name: 'height', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetDestructableName: {
        completion: "native GetDestructableName takes destructable d returns string",
        description: "",
        parameters: [
            { label: 'destructable', name: 'd', documentation: "a single destructable reference" },
      ],
    
    },
    CreateItem: {
        completion: "native CreateItem takes integer itemid, real x, real y returns item",
        description: "",
        parameters: [
            { label: 'integer', name: 'itemid', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    RemoveItem: {
        completion: "native RemoveItem takes item whichItem returns nothing",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],
    
    },
    GetItemPlayer: {
        completion: "native GetItemPlayer takes item whichItem returns player",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],
    
    },
    GetItemTypeId: {
        completion: "native GetItemTypeId takes item i returns integer",
        description: "",
        parameters: [
            { label: 'item', name: 'i', documentation: "a single item reference" },
      ],
    
    },
    GetItemX: {
        completion: "native GetItemX takes item i returns real",
        description: "",
        parameters: [
            { label: 'item', name: 'i', documentation: "a single item reference" },
      ],
    
    },
    GetItemY: {
        completion: "native GetItemY takes item i returns real",
        description: "",
        parameters: [
            { label: 'item', name: 'i', documentation: "a single item reference" },
      ],
    
    },
    SetItemPosition: {
        completion: "native SetItemPosition takes item i, real x, real y returns nothing",
        description: "",
        parameters: [
            { label: 'item', name: 'i', documentation: "a single item reference" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetItemDropOnDeath: {
        completion: "native SetItemDropOnDeath takes item whichItem, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetItemDroppable: {
        completion: "native SetItemDroppable takes item i, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'item', name: 'i', documentation: "a single item reference" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetItemPawnable: {
        completion: "native SetItemPawnable takes item i, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'item', name: 'i', documentation: "a single item reference" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetItemPlayer: {
        completion: "native SetItemPlayer takes item whichItem, player whichPlayer, boolean changeColor returns nothing",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'boolean', name: 'changeColor', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetItemInvulnerable: {
        completion: "native SetItemInvulnerable takes item whichItem, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    IsItemInvulnerable: {
        completion: "native IsItemInvulnerable takes item whichItem returns boolean",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],
    
    },
    SetItemVisible: {
        completion: "native SetItemVisible takes item whichItem, boolean show returns nothing",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
            { label: 'boolean', name: 'show', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    IsItemVisible: {
        completion: "native IsItemVisible takes item whichItem returns boolean",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],
    
    },
    IsItemOwned: {
        completion: "native IsItemOwned takes item whichItem returns boolean",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],
    
    },
    IsItemPowerup: {
        completion: "native IsItemPowerup takes item whichItem returns boolean",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],
    
    },
    IsItemSellable: {
        completion: "native IsItemSellable takes item whichItem returns boolean",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],
    
    },
    IsItemPawnable: {
        completion: "native IsItemPawnable takes item whichItem returns boolean",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],
    
    },
    IsItemIdPowerup: {
        completion: "native IsItemIdPowerup takes integer itemId returns boolean",
        description: "",
        parameters: [
            { label: 'integer', name: 'itemId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    IsItemIdSellable: {
        completion: "native IsItemIdSellable takes integer itemId returns boolean",
        description: "",
        parameters: [
            { label: 'integer', name: 'itemId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    IsItemIdPawnable: {
        completion: "native IsItemIdPawnable takes integer itemId returns boolean",
        description: "",
        parameters: [
            { label: 'integer', name: 'itemId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    EnumItemsInRect: {
        completion: "native EnumItemsInRect takes rect r, boolexpr filter, code actionFunc returns nothing",
        description: "",
        parameters: [
            { label: 'rect', name: 'r', documentation: "" },
            { label: 'boolexpr', name: 'filter', documentation: "" },
            { label: 'code', name: 'actionFunc', documentation: "a function may have parameter that are of type code" },
      ],
    
    },
    GetItemLevel: {
        completion: "native GetItemLevel takes item whichItem returns integer",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],
    
    },
    GetItemType: {
        completion: "native GetItemType takes item whichItem returns itemtype",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],
    
    },
    SetItemDropID: {
        completion: "native SetItemDropID takes item whichItem, integer unitId returns nothing",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
            { label: 'integer', name: 'unitId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetItemName: {
        completion: "constant native GetItemName takes item whichItem returns string",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],
    
    },
    GetItemCharges: {
        completion: "native GetItemCharges takes item whichItem returns integer",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],
    
    },
    SetItemCharges: {
        completion: "native SetItemCharges takes item whichItem, integer charges returns nothing",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
            { label: 'integer', name: 'charges', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetItemUserData: {
        completion: "native GetItemUserData takes item whichItem returns integer",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],
    
    },
    SetItemUserData: {
        completion: "native SetItemUserData takes item whichItem, integer data returns nothing",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
            { label: 'integer', name: 'data', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    CreateUnit: {
        completion: "native CreateUnit takes player id, integer unitid, real x, real y, real face returns unit",
        description: "",
        parameters: [
            { label: 'player', name: 'id', documentation: "a single player reference" },
            { label: 'integer', name: 'unitid', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'face', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CreateUnitByName: {
        completion: "native CreateUnitByName takes player whichPlayer, string unitname, real x, real y, real face returns unit",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'string', name: 'unitname', documentation: "strings variables hold a series of characters" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'face', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CreateUnitAtLoc: {
        completion: "native CreateUnitAtLoc takes player id, integer unitid, location whichLocation, real face returns unit",
        description: "",
        parameters: [
            { label: 'player', name: 'id', documentation: "a single player reference" },
            { label: 'integer', name: 'unitid', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'location', name: 'whichLocation', documentation: "" },
            { label: 'real', name: 'face', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CreateUnitAtLocByName: {
        completion: "native CreateUnitAtLocByName takes player id, string unitname, location whichLocation, real face returns unit",
        description: "",
        parameters: [
            { label: 'player', name: 'id', documentation: "a single player reference" },
            { label: 'string', name: 'unitname', documentation: "strings variables hold a series of characters" },
            { label: 'location', name: 'whichLocation', documentation: "" },
            { label: 'real', name: 'face', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CreateCorpse: {
        completion: "native CreateCorpse takes player whichPlayer, integer unitid, real x, real y, real face returns unit",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'integer', name: 'unitid', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'face', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    KillUnit: {
        completion: "native KillUnit takes unit whichUnit returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    RemoveUnit: {
        completion: "native RemoveUnit takes unit whichUnit returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    ShowUnit: {
        completion: "native ShowUnit takes unit whichUnit, boolean show returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolean', name: 'show', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetUnitState: {
        completion: "native SetUnitState takes unit whichUnit, unitstate whichUnitState, real newVal returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'unitstate', name: 'whichUnitState', documentation: "" },
            { label: 'real', name: 'newVal', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetUnitX: {
        completion: "native SetUnitX takes unit whichUnit, real newX returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'newX', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetUnitY: {
        completion: "native SetUnitY takes unit whichUnit, real newY returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'newY', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetUnitPosition: {
        completion: "native SetUnitPosition takes unit whichUnit, real newX, real newY returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'newX', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'newY', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetUnitPositionLoc: {
        completion: "native SetUnitPositionLoc takes unit whichUnit, location whichLocation returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'location', name: 'whichLocation', documentation: "" },
      ],
    
    },
    SetUnitFacing: {
        completion: "native SetUnitFacing takes unit whichUnit, real facingAngle returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'facingAngle', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetUnitFacingTimed: {
        completion: "native SetUnitFacingTimed takes unit whichUnit, real facingAngle, real duration returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'facingAngle', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetUnitMoveSpeed: {
        completion: "native SetUnitMoveSpeed takes unit whichUnit, real newSpeed returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'newSpeed', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetUnitFlyHeight: {
        completion: "native SetUnitFlyHeight takes unit whichUnit, real newHeight, real rate returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'newHeight', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'rate', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetUnitTurnSpeed: {
        completion: "native SetUnitTurnSpeed takes unit whichUnit, real newTurnSpeed returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'newTurnSpeed', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetUnitPropWindow: {
        completion: "native SetUnitPropWindow takes unit whichUnit, real newPropWindowAngle returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'newPropWindowAngle', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetUnitAcquireRange: {
        completion: "native SetUnitAcquireRange takes unit whichUnit, real newAcquireRange returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'newAcquireRange', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetUnitCreepGuard: {
        completion: "native SetUnitCreepGuard takes unit whichUnit, boolean creepGuard returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolean', name: 'creepGuard', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetUnitAcquireRange: {
        completion: "native GetUnitAcquireRange takes unit whichUnit returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitTurnSpeed: {
        completion: "native GetUnitTurnSpeed takes unit whichUnit returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitPropWindow: {
        completion: "native GetUnitPropWindow takes unit whichUnit returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitFlyHeight: {
        completion: "native GetUnitFlyHeight takes unit whichUnit returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitDefaultAcquireRange: {
        completion: "native GetUnitDefaultAcquireRange takes unit whichUnit returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitDefaultTurnSpeed: {
        completion: "native GetUnitDefaultTurnSpeed takes unit whichUnit returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitDefaultPropWindow: {
        completion: "native GetUnitDefaultPropWindow takes unit whichUnit returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitDefaultFlyHeight: {
        completion: "native GetUnitDefaultFlyHeight takes unit whichUnit returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    SetUnitOwner: {
        completion: "native SetUnitOwner takes unit whichUnit, player whichPlayer, boolean changeColor returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'boolean', name: 'changeColor', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetUnitColor: {
        completion: "native SetUnitColor takes unit whichUnit, playercolor whichColor returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'playercolor', name: 'whichColor', documentation: "" },
      ],
    
    },
    SetUnitScale: {
        completion: "native SetUnitScale takes unit whichUnit, real scaleX, real scaleY, real scaleZ returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'scaleX', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'scaleY', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'scaleZ', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetUnitTimeScale: {
        completion: "native SetUnitTimeScale takes unit whichUnit, real timeScale returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'timeScale', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetUnitBlendTime: {
        completion: "native SetUnitBlendTime takes unit whichUnit, real blendTime returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'blendTime', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetUnitVertexColor: {
        completion: "native SetUnitVertexColor takes unit whichUnit, integer red, integer green, integer blue, integer alpha returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'red', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'green', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'blue', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'alpha', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    QueueUnitAnimation: {
        completion: "native QueueUnitAnimation takes unit whichUnit, string whichAnimation returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'string', name: 'whichAnimation', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SetUnitAnimation: {
        completion: "native SetUnitAnimation takes unit whichUnit, string whichAnimation returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'string', name: 'whichAnimation', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SetUnitAnimationByIndex: {
        completion: "native SetUnitAnimationByIndex takes unit whichUnit, integer whichAnimation returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'whichAnimation', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetUnitAnimationWithRarity: {
        completion: "native SetUnitAnimationWithRarity takes unit whichUnit, string whichAnimation, raritycontrol rarity returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'string', name: 'whichAnimation', documentation: "strings variables hold a series of characters" },
            { label: 'raritycontrol', name: 'rarity', documentation: "" },
      ],
    
    },
    AddUnitAnimationProperties: {
        completion: "native AddUnitAnimationProperties takes unit whichUnit, string animProperties, boolean add returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'string', name: 'animProperties', documentation: "strings variables hold a series of characters" },
            { label: 'boolean', name: 'add', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetUnitLookAt: {
        completion: "native SetUnitLookAt takes unit whichUnit, string whichBone, unit lookAtTarget, real offsetX, real offsetY, real offsetZ returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'string', name: 'whichBone', documentation: "strings variables hold a series of characters" },
            { label: 'unit', name: 'lookAtTarget', documentation: "a single unit reference" },
            { label: 'real', name: 'offsetX', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'offsetY', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'offsetZ', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    ResetUnitLookAt: {
        completion: "native ResetUnitLookAt takes unit whichUnit returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    SetUnitRescuable: {
        completion: "native SetUnitRescuable takes unit whichUnit, player byWhichPlayer, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'player', name: 'byWhichPlayer', documentation: "a single player reference" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetUnitRescueRange: {
        completion: "native SetUnitRescueRange takes unit whichUnit, real range returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'range', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetHeroStr: {
        completion: "native SetHeroStr takes unit whichHero, integer newStr, boolean permanent returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
            { label: 'integer', name: 'newStr', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'permanent', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetHeroAgi: {
        completion: "native SetHeroAgi takes unit whichHero, integer newAgi, boolean permanent returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
            { label: 'integer', name: 'newAgi', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'permanent', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetHeroInt: {
        completion: "native SetHeroInt takes unit whichHero, integer newInt, boolean permanent returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
            { label: 'integer', name: 'newInt', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'permanent', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetHeroStr: {
        completion: "native GetHeroStr takes unit whichHero, boolean includeBonuses returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
            { label: 'boolean', name: 'includeBonuses', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetHeroAgi: {
        completion: "native GetHeroAgi takes unit whichHero, boolean includeBonuses returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
            { label: 'boolean', name: 'includeBonuses', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetHeroInt: {
        completion: "native GetHeroInt takes unit whichHero, boolean includeBonuses returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
            { label: 'boolean', name: 'includeBonuses', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    UnitStripHeroLevel: {
        completion: "native UnitStripHeroLevel takes unit whichHero, integer howManyLevels returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
            { label: 'integer', name: 'howManyLevels', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetHeroXP: {
        completion: "native GetHeroXP takes unit whichHero returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
      ],
    
    },
    SetHeroXP: {
        completion: "native SetHeroXP takes unit whichHero, integer newXpVal, boolean showEyeCandy returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
            { label: 'integer', name: 'newXpVal', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'showEyeCandy', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetHeroSkillPoints: {
        completion: "native GetHeroSkillPoints takes unit whichHero returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
      ],
    
    },
    UnitModifySkillPoints: {
        completion: "native UnitModifySkillPoints takes unit whichHero, integer skillPointDelta returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
            { label: 'integer', name: 'skillPointDelta', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    AddHeroXP: {
        completion: "native AddHeroXP takes unit whichHero, integer xpToAdd, boolean showEyeCandy returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
            { label: 'integer', name: 'xpToAdd', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'showEyeCandy', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetHeroLevel: {
        completion: "native SetHeroLevel takes unit whichHero, integer level, boolean showEyeCandy returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'showEyeCandy', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetHeroLevel: {
        completion: "constant native GetHeroLevel takes unit whichHero returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitLevel: {
        completion: "constant native GetUnitLevel takes unit whichUnit returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetHeroProperName: {
        completion: "native GetHeroProperName takes unit whichHero returns string",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
      ],
    
    },
    SuspendHeroXP: {
        completion: "native SuspendHeroXP takes unit whichHero, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    IsSuspendedXP: {
        completion: "native IsSuspendedXP takes unit whichHero returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
      ],
    
    },
    SelectHeroSkill: {
        completion: "native SelectHeroSkill takes unit whichHero, integer abilcode returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
            { label: 'integer', name: 'abilcode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetUnitAbilityLevel: {
        completion: "native GetUnitAbilityLevel takes unit whichUnit, integer abilcode returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'abilcode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    DecUnitAbilityLevel: {
        completion: "native DecUnitAbilityLevel takes unit whichUnit, integer abilcode returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'abilcode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    IncUnitAbilityLevel: {
        completion: "native IncUnitAbilityLevel takes unit whichUnit, integer abilcode returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'abilcode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetUnitAbilityLevel: {
        completion: "native SetUnitAbilityLevel takes unit whichUnit, integer abilcode, integer level returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'abilcode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ReviveHero: {
        completion: "native ReviveHero takes unit whichHero, real x, real y, boolean doEyecandy returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'doEyecandy', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    ReviveHeroLoc: {
        completion: "native ReviveHeroLoc takes unit whichHero, location loc, boolean doEyecandy returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
            { label: 'location', name: 'loc', documentation: "" },
            { label: 'boolean', name: 'doEyecandy', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetUnitExploded: {
        completion: "native SetUnitExploded takes unit whichUnit, boolean exploded returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolean', name: 'exploded', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetUnitInvulnerable: {
        completion: "native SetUnitInvulnerable takes unit whichUnit, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    PauseUnit: {
        completion: "native PauseUnit takes unit whichUnit, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    IsUnitPaused: {
        completion: "native IsUnitPaused takes unit whichHero returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichHero', documentation: "a single unit reference" },
      ],
    
    },
    SetUnitPathing: {
        completion: "native SetUnitPathing takes unit whichUnit, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    ClearSelection: {
        completion: "native ClearSelection takes nothing returns nothing",
        description: "",
    
    },
    SelectUnit: {
        completion: "native SelectUnit takes unit whichUnit, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetUnitPointValue: {
        completion: "native GetUnitPointValue takes unit whichUnit returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitPointValueByType: {
        completion: "native GetUnitPointValueByType takes integer unitType returns integer",
        description: "",
        parameters: [
            { label: 'integer', name: 'unitType', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    UnitAddItem: {
        completion: "native UnitAddItem takes unit whichUnit, item whichItem returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],
    
    },
    UnitAddItemById: {
        completion: "native UnitAddItemById takes unit whichUnit, integer itemId returns item",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'itemId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    UnitAddItemToSlotById: {
        completion: "native UnitAddItemToSlotById takes unit whichUnit, integer itemId, integer itemSlot returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'itemId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'itemSlot', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    UnitRemoveItem: {
        completion: "native UnitRemoveItem takes unit whichUnit, item whichItem returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],
    
    },
    UnitRemoveItemFromSlot: {
        completion: "native UnitRemoveItemFromSlot takes unit whichUnit, integer itemSlot returns item",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'itemSlot', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    UnitHasItem: {
        completion: "native UnitHasItem takes unit whichUnit, item whichItem returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],
    
    },
    UnitItemInSlot: {
        completion: "native UnitItemInSlot takes unit whichUnit, integer itemSlot returns item",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'itemSlot', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    UnitInventorySize: {
        completion: "native UnitInventorySize takes unit whichUnit returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    UnitDropItemPoint: {
        completion: "native UnitDropItemPoint takes unit whichUnit, item whichItem, real x, real y returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    UnitDropItemSlot: {
        completion: "native UnitDropItemSlot takes unit whichUnit, item whichItem, integer slot returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
            { label: 'integer', name: 'slot', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    UnitDropItemTarget: {
        completion: "native UnitDropItemTarget takes unit whichUnit, item whichItem, widget target returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
            { label: 'widget', name: 'target', documentation: "an interactive game object with life" },
      ],
    
    },
    UnitUseItem: {
        completion: "native UnitUseItem takes unit whichUnit, item whichItem returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],
    
    },
    UnitUseItemPoint: {
        completion: "native UnitUseItemPoint takes unit whichUnit, item whichItem, real x, real y returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    UnitUseItemTarget: {
        completion: "native UnitUseItemTarget takes unit whichUnit, item whichItem, widget target returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
            { label: 'widget', name: 'target', documentation: "an interactive game object with life" },
      ],
    
    },
    GetUnitX: {
        completion: "constant native GetUnitX takes unit whichUnit returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitY: {
        completion: "constant native GetUnitY takes unit whichUnit returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitLoc: {
        completion: "constant native GetUnitLoc takes unit whichUnit returns location",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitFacing: {
        completion: "constant native GetUnitFacing takes unit whichUnit returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitMoveSpeed: {
        completion: "constant native GetUnitMoveSpeed takes unit whichUnit returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitDefaultMoveSpeed: {
        completion: "constant native GetUnitDefaultMoveSpeed takes unit whichUnit returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitState: {
        completion: "constant native GetUnitState takes unit whichUnit, unitstate whichUnitState returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'unitstate', name: 'whichUnitState', documentation: "" },
      ],
    
    },
    GetOwningPlayer: {
        completion: "constant native GetOwningPlayer takes unit whichUnit returns player",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitTypeId: {
        completion: "constant native GetUnitTypeId takes unit whichUnit returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitRace: {
        completion: "constant native GetUnitRace takes unit whichUnit returns race",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitName: {
        completion: "constant native GetUnitName takes unit whichUnit returns string",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitFoodUsed: {
        completion: "constant native GetUnitFoodUsed takes unit whichUnit returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitFoodMade: {
        completion: "constant native GetUnitFoodMade takes unit whichUnit returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetFoodMade: {
        completion: "constant native GetFoodMade takes integer unitId returns integer",
        description: "",
        parameters: [
            { label: 'integer', name: 'unitId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetFoodUsed: {
        completion: "constant native GetFoodUsed takes integer unitId returns integer",
        description: "",
        parameters: [
            { label: 'integer', name: 'unitId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetUnitUseFood: {
        completion: "native SetUnitUseFood takes unit whichUnit, boolean useFood returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolean', name: 'useFood', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetUnitRallyPoint: {
        completion: "constant native GetUnitRallyPoint takes unit whichUnit returns location",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitRallyUnit: {
        completion: "constant native GetUnitRallyUnit takes unit whichUnit returns unit",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    GetUnitRallyDestructable: {
        completion: "constant native GetUnitRallyDestructable takes unit whichUnit returns destructable",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    IsUnitInGroup: {
        completion: "constant native IsUnitInGroup takes unit whichUnit, group whichGroup returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
      ],
    
    },
    IsUnitInForce: {
        completion: "constant native IsUnitInForce takes unit whichUnit, force whichForce returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'force', name: 'whichForce', documentation: "a collection of players" },
      ],
    
    },
    IsUnitOwnedByPlayer: {
        completion: "constant native IsUnitOwnedByPlayer takes unit whichUnit, player whichPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    IsUnitAlly: {
        completion: "constant native IsUnitAlly takes unit whichUnit, player whichPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    IsUnitEnemy: {
        completion: "constant native IsUnitEnemy takes unit whichUnit, player whichPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    IsUnitVisible: {
        completion: "constant native IsUnitVisible takes unit whichUnit, player whichPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    IsUnitDetected: {
        completion: "constant native IsUnitDetected takes unit whichUnit, player whichPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    IsUnitInvisible: {
        completion: "constant native IsUnitInvisible takes unit whichUnit, player whichPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    IsUnitFogged: {
        completion: "constant native IsUnitFogged takes unit whichUnit, player whichPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    IsUnitMasked: {
        completion: "constant native IsUnitMasked takes unit whichUnit, player whichPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    IsUnitSelected: {
        completion: "constant native IsUnitSelected takes unit whichUnit, player whichPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    IsUnitRace: {
        completion: "constant native IsUnitRace takes unit whichUnit, race whichRace returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'race', name: 'whichRace', documentation: "" },
      ],
    
    },
    IsUnitType: {
        completion: "constant native IsUnitType takes unit whichUnit, unittype whichUnitType returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'unittype', name: 'whichUnitType', documentation: "" },
      ],
    
    },
    IsUnit: {
        completion: "constant native IsUnit takes unit whichUnit, unit whichSpecifiedUnit returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'unit', name: 'whichSpecifiedUnit', documentation: "a single unit reference" },
      ],
    
    },
    IsUnitInRange: {
        completion: "constant native IsUnitInRange takes unit whichUnit, unit otherUnit, real distance returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'unit', name: 'otherUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'distance', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    IsUnitInRangeXY: {
        completion: "constant native IsUnitInRangeXY takes unit whichUnit, real x, real y, real distance returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'distance', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    IsUnitInRangeLoc: {
        completion: "constant native IsUnitInRangeLoc takes unit whichUnit, location whichLocation, real distance returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'location', name: 'whichLocation', documentation: "" },
            { label: 'real', name: 'distance', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    IsUnitHidden: {
        completion: "constant native IsUnitHidden takes unit whichUnit returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    IsUnitIllusion: {
        completion: "constant native IsUnitIllusion takes unit whichUnit returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    IsUnitInTransport: {
        completion: "constant native IsUnitInTransport takes unit whichUnit, unit whichTransport returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'unit', name: 'whichTransport', documentation: "a single unit reference" },
      ],
    
    },
    IsUnitLoaded: {
        completion: "constant native IsUnitLoaded takes unit whichUnit returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    IsHeroUnitId: {
        completion: "constant native IsHeroUnitId takes integer unitId returns boolean",
        description: "",
        parameters: [
            { label: 'integer', name: 'unitId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    IsUnitIdType: {
        completion: "constant native IsUnitIdType takes integer unitId, unittype whichUnitType returns boolean",
        description: "",
        parameters: [
            { label: 'integer', name: 'unitId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'unittype', name: 'whichUnitType', documentation: "" },
      ],
    
    },
    UnitShareVision: {
        completion: "native UnitShareVision takes unit whichUnit, player whichPlayer, boolean share returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'boolean', name: 'share', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    UnitSuspendDecay: {
        completion: "native UnitSuspendDecay takes unit whichUnit, boolean suspend returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolean', name: 'suspend', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    UnitAddType: {
        completion: "native UnitAddType takes unit whichUnit, unittype whichUnitType returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'unittype', name: 'whichUnitType', documentation: "" },
      ],
    
    },
    UnitRemoveType: {
        completion: "native UnitRemoveType takes unit whichUnit, unittype whichUnitType returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'unittype', name: 'whichUnitType', documentation: "" },
      ],
    
    },
    UnitAddAbility: {
        completion: "native UnitAddAbility takes unit whichUnit, integer abilityId returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'abilityId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    UnitRemoveAbility: {
        completion: "native UnitRemoveAbility takes unit whichUnit, integer abilityId returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'abilityId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    UnitMakeAbilityPermanent: {
        completion: "native UnitMakeAbilityPermanent takes unit whichUnit, boolean permanent, integer abilityId returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolean', name: 'permanent', documentation: "boolean variables can take the values true of false" },
            { label: 'integer', name: 'abilityId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    UnitRemoveBuffs: {
        completion: "native UnitRemoveBuffs takes unit whichUnit, boolean removePositive, boolean removeNegative returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolean', name: 'removePositive', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'removeNegative', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    UnitRemoveBuffsEx: {
        completion: "native UnitRemoveBuffsEx takes unit whichUnit, boolean removePositive, boolean removeNegative, boolean magic, boolean physical, boolean timedLife, boolean aura, boolean autoDispel returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolean', name: 'removePositive', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'removeNegative', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'magic', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'physical', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'timedLife', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'aura', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'autoDispel', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    UnitHasBuffsEx: {
        completion: "native UnitHasBuffsEx takes unit whichUnit, boolean removePositive, boolean removeNegative, boolean magic, boolean physical, boolean timedLife, boolean aura, boolean autoDispel returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolean', name: 'removePositive', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'removeNegative', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'magic', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'physical', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'timedLife', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'aura', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'autoDispel', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    UnitCountBuffsEx: {
        completion: "native UnitCountBuffsEx takes unit whichUnit, boolean removePositive, boolean removeNegative, boolean magic, boolean physical, boolean timedLife, boolean aura, boolean autoDispel returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolean', name: 'removePositive', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'removeNegative', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'magic', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'physical', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'timedLife', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'aura', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'autoDispel', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    UnitAddSleep: {
        completion: "native UnitAddSleep takes unit whichUnit, boolean add returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolean', name: 'add', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    UnitCanSleep: {
        completion: "native UnitCanSleep takes unit whichUnit returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    UnitAddSleepPerm: {
        completion: "native UnitAddSleepPerm takes unit whichUnit, boolean add returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolean', name: 'add', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    UnitCanSleepPerm: {
        completion: "native UnitCanSleepPerm takes unit whichUnit returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    UnitIsSleeping: {
        completion: "native UnitIsSleeping takes unit whichUnit returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    UnitWakeUp: {
        completion: "native UnitWakeUp takes unit whichUnit returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    UnitApplyTimedLife: {
        completion: "native UnitApplyTimedLife takes unit whichUnit, integer buffId, real duration returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'buffId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    UnitIgnoreAlarm: {
        completion: "native UnitIgnoreAlarm takes unit whichUnit, boolean flag returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    UnitIgnoreAlarmToggled: {
        completion: "native UnitIgnoreAlarmToggled takes unit whichUnit returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    UnitResetCooldown: {
        completion: "native UnitResetCooldown takes unit whichUnit returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    UnitSetConstructionProgress: {
        completion: "native UnitSetConstructionProgress takes unit whichUnit, integer constructionPercentage returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'constructionPercentage', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    UnitSetUpgradeProgress: {
        completion: "native UnitSetUpgradeProgress takes unit whichUnit, integer upgradePercentage returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'upgradePercentage', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    UnitPauseTimedLife: {
        completion: "native UnitPauseTimedLife takes unit whichUnit, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    UnitSetUsesAltIcon: {
        completion: "native UnitSetUsesAltIcon takes unit whichUnit, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    UnitDamagePoint: {
        completion: "native UnitDamagePoint takes unit whichUnit, real delay, real radius, real x, real y, real amount, boolean attack, boolean ranged, attacktype attackType, damagetype damageType, weapontype weaponType returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'delay', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'amount', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'attack', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'ranged', documentation: "boolean variables can take the values true of false" },
            { label: 'attacktype', name: 'attackType', documentation: "" },
            { label: 'damagetype', name: 'damageType', documentation: "" },
            { label: 'weapontype', name: 'weaponType', documentation: "" },
      ],
    
    },
    UnitDamageTarget: {
        completion: "native UnitDamageTarget takes unit whichUnit, widget target, real amount, boolean attack, boolean ranged, attacktype attackType, damagetype damageType, weapontype weaponType returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'widget', name: 'target', documentation: "an interactive game object with life" },
            { label: 'real', name: 'amount', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'attack', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'ranged', documentation: "boolean variables can take the values true of false" },
            { label: 'attacktype', name: 'attackType', documentation: "" },
            { label: 'damagetype', name: 'damageType', documentation: "" },
            { label: 'weapontype', name: 'weaponType', documentation: "" },
      ],
    
    },
    IssueImmediateOrder: {
        completion: "native IssueImmediateOrder takes unit whichUnit, string order returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'string', name: 'order', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    IssueImmediateOrderById: {
        completion: "native IssueImmediateOrderById takes unit whichUnit, integer order returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'order', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    IssuePointOrder: {
        completion: "native IssuePointOrder takes unit whichUnit, string order, real x, real y returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'string', name: 'order', documentation: "strings variables hold a series of characters" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    IssuePointOrderLoc: {
        completion: "native IssuePointOrderLoc takes unit whichUnit, string order, location whichLocation returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'string', name: 'order', documentation: "strings variables hold a series of characters" },
            { label: 'location', name: 'whichLocation', documentation: "" },
      ],
    
    },
    IssuePointOrderById: {
        completion: "native IssuePointOrderById takes unit whichUnit, integer order, real x, real y returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'order', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    IssuePointOrderByIdLoc: {
        completion: "native IssuePointOrderByIdLoc takes unit whichUnit, integer order, location whichLocation returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'order', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'location', name: 'whichLocation', documentation: "" },
      ],
    
    },
    IssueTargetOrder: {
        completion: "native IssueTargetOrder takes unit whichUnit, string order, widget targetWidget returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'string', name: 'order', documentation: "strings variables hold a series of characters" },
            { label: 'widget', name: 'targetWidget', documentation: "an interactive game object with life" },
      ],
    
    },
    IssueTargetOrderById: {
        completion: "native IssueTargetOrderById takes unit whichUnit, integer order, widget targetWidget returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'order', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'widget', name: 'targetWidget', documentation: "an interactive game object with life" },
      ],
    
    },
    IssueInstantPointOrder: {
        completion: "native IssueInstantPointOrder takes unit whichUnit, string order, real x, real y, widget instantTargetWidget returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'string', name: 'order', documentation: "strings variables hold a series of characters" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'widget', name: 'instantTargetWidget', documentation: "an interactive game object with life" },
      ],
    
    },
    IssueInstantPointOrderById: {
        completion: "native IssueInstantPointOrderById takes unit whichUnit, integer order, real x, real y, widget instantTargetWidget returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'order', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'widget', name: 'instantTargetWidget', documentation: "an interactive game object with life" },
      ],
    
    },
    IssueInstantTargetOrder: {
        completion: "native IssueInstantTargetOrder takes unit whichUnit, string order, widget targetWidget, widget instantTargetWidget returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'string', name: 'order', documentation: "strings variables hold a series of characters" },
            { label: 'widget', name: 'targetWidget', documentation: "an interactive game object with life" },
            { label: 'widget', name: 'instantTargetWidget', documentation: "an interactive game object with life" },
      ],
    
    },
    IssueInstantTargetOrderById: {
        completion: "native IssueInstantTargetOrderById takes unit whichUnit, integer order, widget targetWidget, widget instantTargetWidget returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'order', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'widget', name: 'targetWidget', documentation: "an interactive game object with life" },
            { label: 'widget', name: 'instantTargetWidget', documentation: "an interactive game object with life" },
      ],
    
    },
    IssueBuildOrder: {
        completion: "native IssueBuildOrder takes unit whichPeon, string unitToBuild, real x, real y returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichPeon', documentation: "a single unit reference" },
            { label: 'string', name: 'unitToBuild', documentation: "strings variables hold a series of characters" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    IssueBuildOrderById: {
        completion: "native IssueBuildOrderById takes unit whichPeon, integer unitId, real x, real y returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichPeon', documentation: "a single unit reference" },
            { label: 'integer', name: 'unitId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    IssueNeutralImmediateOrder: {
        completion: "native IssueNeutralImmediateOrder takes player forWhichPlayer, unit neutralStructure, string unitToBuild returns boolean",
        description: "",
        parameters: [
            { label: 'player', name: 'forWhichPlayer', documentation: "a single player reference" },
            { label: 'unit', name: 'neutralStructure', documentation: "a single unit reference" },
            { label: 'string', name: 'unitToBuild', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    IssueNeutralImmediateOrderById: {
        completion: "native IssueNeutralImmediateOrderById takes player forWhichPlayer,unit neutralStructure, integer unitId returns boolean",
        description: "",
        parameters: [
            { label: 'player', name: 'forWhichPlayer', documentation: "a single player reference" },
            { label: 'unit', name: 'neutralStructure', documentation: "a single unit reference" },
            { label: 'integer', name: 'unitId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    IssueNeutralPointOrder: {
        completion: "native IssueNeutralPointOrder takes player forWhichPlayer,unit neutralStructure, string unitToBuild, real x, real y returns boolean",
        description: "",
        parameters: [
            { label: 'player', name: 'forWhichPlayer', documentation: "a single player reference" },
            { label: 'unit', name: 'neutralStructure', documentation: "a single unit reference" },
            { label: 'string', name: 'unitToBuild', documentation: "strings variables hold a series of characters" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    IssueNeutralPointOrderById: {
        completion: "native IssueNeutralPointOrderById takes player forWhichPlayer,unit neutralStructure, integer unitId, real x, real y returns boolean",
        description: "",
        parameters: [
            { label: 'player', name: 'forWhichPlayer', documentation: "a single player reference" },
            { label: 'unit', name: 'neutralStructure', documentation: "a single unit reference" },
            { label: 'integer', name: 'unitId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    IssueNeutralTargetOrder: {
        completion: "native IssueNeutralTargetOrder takes player forWhichPlayer,unit neutralStructure, string unitToBuild, widget target returns boolean",
        description: "",
        parameters: [
            { label: 'player', name: 'forWhichPlayer', documentation: "a single player reference" },
            { label: 'unit', name: 'neutralStructure', documentation: "a single unit reference" },
            { label: 'string', name: 'unitToBuild', documentation: "strings variables hold a series of characters" },
            { label: 'widget', name: 'target', documentation: "an interactive game object with life" },
      ],
    
    },
    IssueNeutralTargetOrderById: {
        completion: "native IssueNeutralTargetOrderById takes player forWhichPlayer,unit neutralStructure, integer unitId, widget target returns boolean",
        description: "",
        parameters: [
            { label: 'player', name: 'forWhichPlayer', documentation: "a single player reference" },
            { label: 'unit', name: 'neutralStructure', documentation: "a single unit reference" },
            { label: 'integer', name: 'unitId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'widget', name: 'target', documentation: "an interactive game object with life" },
      ],
    
    },
    GetUnitCurrentOrder: {
        completion: "native GetUnitCurrentOrder takes unit whichUnit returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    SetResourceAmount: {
        completion: "native SetResourceAmount takes unit whichUnit, integer amount returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'amount', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    AddResourceAmount: {
        completion: "native AddResourceAmount takes unit whichUnit, integer amount returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'amount', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetResourceAmount: {
        completion: "native GetResourceAmount takes unit whichUnit returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    WaygateGetDestinationX: {
        completion: "native WaygateGetDestinationX takes unit waygate returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'waygate', documentation: "a single unit reference" },
      ],
    
    },
    WaygateGetDestinationY: {
        completion: "native WaygateGetDestinationY takes unit waygate returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'waygate', documentation: "a single unit reference" },
      ],
    
    },
    WaygateSetDestination: {
        completion: "native WaygateSetDestination takes unit waygate, real x, real y returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'waygate', documentation: "a single unit reference" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    WaygateActivate: {
        completion: "native WaygateActivate takes unit waygate, boolean activate returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'waygate', documentation: "a single unit reference" },
            { label: 'boolean', name: 'activate', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    WaygateIsActive: {
        completion: "native WaygateIsActive takes unit waygate returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'waygate', documentation: "a single unit reference" },
      ],
    
    },
    AddItemToAllStock: {
        completion: "native AddItemToAllStock takes integer itemId, integer currentStock, integer stockMax returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'itemId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'currentStock', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'stockMax', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    AddItemToStock: {
        completion: "native AddItemToStock takes unit whichUnit, integer itemId, integer currentStock, integer stockMax returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'itemId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'currentStock', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'stockMax', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    AddUnitToAllStock: {
        completion: "native AddUnitToAllStock takes integer unitId, integer currentStock, integer stockMax returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'unitId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'currentStock', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'stockMax', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    AddUnitToStock: {
        completion: "native AddUnitToStock takes unit whichUnit, integer unitId, integer currentStock, integer stockMax returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'unitId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'currentStock', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'stockMax', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    RemoveItemFromAllStock: {
        completion: "native RemoveItemFromAllStock takes integer itemId returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'itemId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    RemoveItemFromStock: {
        completion: "native RemoveItemFromStock takes unit whichUnit, integer itemId returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'itemId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    RemoveUnitFromAllStock: {
        completion: "native RemoveUnitFromAllStock takes integer unitId returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'unitId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    RemoveUnitFromStock: {
        completion: "native RemoveUnitFromStock takes unit whichUnit, integer unitId returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'unitId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetAllItemTypeSlots: {
        completion: "native SetAllItemTypeSlots takes integer slots returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'slots', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetAllUnitTypeSlots: {
        completion: "native SetAllUnitTypeSlots takes integer slots returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'slots', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetItemTypeSlots: {
        completion: "native SetItemTypeSlots takes unit whichUnit, integer slots returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'slots', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetUnitTypeSlots: {
        completion: "native SetUnitTypeSlots takes unit whichUnit, integer slots returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'slots', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetUnitUserData: {
        completion: "native GetUnitUserData takes unit whichUnit returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    SetUnitUserData: {
        completion: "native SetUnitUserData takes unit whichUnit, integer data returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'data', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    Player: {
        completion: "constant native Player takes integer number returns player",
        description: "",
        parameters: [
            { label: 'integer', name: 'number', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetLocalPlayer: {
        completion: "constant native GetLocalPlayer takes nothing returns player",
        description: "",
    
    },
    IsPlayerAlly: {
        completion: "constant native IsPlayerAlly takes player whichPlayer, player otherPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'player', name: 'otherPlayer', documentation: "a single player reference" },
      ],
    
    },
    IsPlayerEnemy: {
        completion: "constant native IsPlayerEnemy takes player whichPlayer, player otherPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'player', name: 'otherPlayer', documentation: "a single player reference" },
      ],
    
    },
    IsPlayerInForce: {
        completion: "constant native IsPlayerInForce takes player whichPlayer, force whichForce returns boolean",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'force', name: 'whichForce', documentation: "a collection of players" },
      ],
    
    },
    IsPlayerObserver: {
        completion: "constant native IsPlayerObserver takes player whichPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    IsVisibleToPlayer: {
        completion: "constant native IsVisibleToPlayer takes real x, real y, player whichPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    IsLocationVisibleToPlayer: {
        completion: "constant native IsLocationVisibleToPlayer takes location whichLocation, player whichPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'location', name: 'whichLocation', documentation: "" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    IsFoggedToPlayer: {
        completion: "constant native IsFoggedToPlayer takes real x, real y, player whichPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    IsLocationFoggedToPlayer: {
        completion: "constant native IsLocationFoggedToPlayer takes location whichLocation, player whichPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'location', name: 'whichLocation', documentation: "" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    IsMaskedToPlayer: {
        completion: "constant native IsMaskedToPlayer takes real x, real y, player whichPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    IsLocationMaskedToPlayer: {
        completion: "constant native IsLocationMaskedToPlayer takes location whichLocation, player whichPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'location', name: 'whichLocation', documentation: "" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    GetPlayerRace: {
        completion: "constant native GetPlayerRace takes player whichPlayer returns race",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    GetPlayerId: {
        completion: "constant native GetPlayerId takes player whichPlayer returns integer",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    GetPlayerUnitCount: {
        completion: "constant native GetPlayerUnitCount takes player whichPlayer, boolean includeIncomplete returns integer",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'boolean', name: 'includeIncomplete', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetPlayerTypedUnitCount: {
        completion: "constant native GetPlayerTypedUnitCount takes player whichPlayer, string unitName, boolean includeIncomplete, boolean includeUpgrades returns integer",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'string', name: 'unitName', documentation: "strings variables hold a series of characters" },
            { label: 'boolean', name: 'includeIncomplete', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'includeUpgrades', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetPlayerStructureCount: {
        completion: "constant native GetPlayerStructureCount takes player whichPlayer, boolean includeIncomplete returns integer",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'boolean', name: 'includeIncomplete', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetPlayerState: {
        completion: "constant native GetPlayerState takes player whichPlayer, playerstate whichPlayerState returns integer",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'playerstate', name: 'whichPlayerState', documentation: "" },
      ],
    
    },
    GetPlayerScore: {
        completion: "constant native GetPlayerScore takes player whichPlayer, playerscore whichPlayerScore returns integer",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'playerscore', name: 'whichPlayerScore', documentation: "" },
      ],
    
    },
    GetPlayerAlliance: {
        completion: "constant native GetPlayerAlliance takes player sourcePlayer, player otherPlayer, alliancetype whichAllianceSetting returns boolean",
        description: "",
        parameters: [
            { label: 'player', name: 'sourcePlayer', documentation: "a single player reference" },
            { label: 'player', name: 'otherPlayer', documentation: "a single player reference" },
            { label: 'alliancetype', name: 'whichAllianceSetting', documentation: "" },
      ],
    
    },
    GetPlayerHandicap: {
        completion: "constant native GetPlayerHandicap takes player whichPlayer returns real",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    GetPlayerHandicapXP: {
        completion: "constant native GetPlayerHandicapXP takes player whichPlayer returns real",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    SetPlayerHandicap: {
        completion: "constant native SetPlayerHandicap takes player whichPlayer, real handicap returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'handicap', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetPlayerHandicapXP: {
        completion: "constant native SetPlayerHandicapXP takes player whichPlayer, real handicap returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'handicap', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetPlayerTechMaxAllowed: {
        completion: "constant native SetPlayerTechMaxAllowed takes player whichPlayer, integer techid, integer maximum returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'integer', name: 'techid', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'maximum', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetPlayerTechMaxAllowed: {
        completion: "constant native GetPlayerTechMaxAllowed takes player whichPlayer, integer techid returns integer",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'integer', name: 'techid', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    AddPlayerTechResearched: {
        completion: "constant native AddPlayerTechResearched takes player whichPlayer, integer techid, integer levels returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'integer', name: 'techid', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'levels', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetPlayerTechResearched: {
        completion: "constant native SetPlayerTechResearched takes player whichPlayer, integer techid, integer setToLevel returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'integer', name: 'techid', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'setToLevel', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetPlayerTechResearched: {
        completion: "constant native GetPlayerTechResearched takes player whichPlayer, integer techid, boolean specificonly returns boolean",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'integer', name: 'techid', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'specificonly', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetPlayerTechCount: {
        completion: "constant native GetPlayerTechCount takes player whichPlayer, integer techid, boolean specificonly returns integer",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'integer', name: 'techid', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'specificonly', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetPlayerUnitsOwner: {
        completion: "native SetPlayerUnitsOwner takes player whichPlayer, integer newOwner returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'integer', name: 'newOwner', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    CripplePlayer: {
        completion: "native CripplePlayer takes player whichPlayer, force toWhichPlayers, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'force', name: 'toWhichPlayers', documentation: "a collection of players" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetPlayerAbilityAvailable: {
        completion: "native SetPlayerAbilityAvailable takes player whichPlayer, integer abilid, boolean avail returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'integer', name: 'abilid', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'avail', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetPlayerState: {
        completion: "native SetPlayerState takes player whichPlayer, playerstate whichPlayerState, integer value returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'playerstate', name: 'whichPlayerState', documentation: "" },
            { label: 'integer', name: 'value', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    RemovePlayer: {
        completion: "native RemovePlayer takes player whichPlayer, playergameresult gameResult returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'playergameresult', name: 'gameResult', documentation: "" },
      ],
    
    },
    CachePlayerHeroData: {
        completion: "native CachePlayerHeroData takes player whichPlayer returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    SetFogStateRect: {
        completion: "native SetFogStateRect takes player forWhichPlayer, fogstate whichState, rect where, boolean useSharedVision returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'forWhichPlayer', documentation: "a single player reference" },
            { label: 'fogstate', name: 'whichState', documentation: "" },
            { label: 'rect', name: 'where', documentation: "" },
            { label: 'boolean', name: 'useSharedVision', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetFogStateRadius: {
        completion: "native SetFogStateRadius takes player forWhichPlayer, fogstate whichState, real centerx, real centerY, real radius, boolean useSharedVision returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'forWhichPlayer', documentation: "a single player reference" },
            { label: 'fogstate', name: 'whichState', documentation: "" },
            { label: 'real', name: 'centerx', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'centerY', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'useSharedVision', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetFogStateRadiusLoc: {
        completion: "native SetFogStateRadiusLoc takes player forWhichPlayer, fogstate whichState, location center, real radius, boolean useSharedVision returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'forWhichPlayer', documentation: "a single player reference" },
            { label: 'fogstate', name: 'whichState', documentation: "" },
            { label: 'location', name: 'center', documentation: "" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'useSharedVision', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    FogMaskEnable: {
        completion: "native FogMaskEnable takes boolean enable returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'enable', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    IsFogMaskEnabled: {
        completion: "native IsFogMaskEnabled takes nothing returns boolean",
        description: "",
    
    },
    FogEnable: {
        completion: "native FogEnable takes boolean enable returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'enable', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    IsFogEnabled: {
        completion: "native IsFogEnabled takes nothing returns boolean",
        description: "",
    
    },
    CreateFogModifierRect: {
        completion: "native CreateFogModifierRect takes player forWhichPlayer, fogstate whichState, rect where, boolean useSharedVision, boolean afterUnits returns fogmodifier",
        description: "",
        parameters: [
            { label: 'player', name: 'forWhichPlayer', documentation: "a single player reference" },
            { label: 'fogstate', name: 'whichState', documentation: "" },
            { label: 'rect', name: 'where', documentation: "" },
            { label: 'boolean', name: 'useSharedVision', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'afterUnits', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    CreateFogModifierRadius: {
        completion: "native CreateFogModifierRadius takes player forWhichPlayer, fogstate whichState, real centerx, real centerY, real radius, boolean useSharedVision, boolean afterUnits returns fogmodifier",
        description: "",
        parameters: [
            { label: 'player', name: 'forWhichPlayer', documentation: "a single player reference" },
            { label: 'fogstate', name: 'whichState', documentation: "" },
            { label: 'real', name: 'centerx', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'centerY', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'useSharedVision', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'afterUnits', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    CreateFogModifierRadiusLoc: {
        completion: "native CreateFogModifierRadiusLoc takes player forWhichPlayer, fogstate whichState, location center, real radius, boolean useSharedVision, boolean afterUnits returns fogmodifier",
        description: "",
        parameters: [
            { label: 'player', name: 'forWhichPlayer', documentation: "a single player reference" },
            { label: 'fogstate', name: 'whichState', documentation: "" },
            { label: 'location', name: 'center', documentation: "" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'useSharedVision', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'afterUnits', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    DestroyFogModifier: {
        completion: "native DestroyFogModifier takes fogmodifier whichFogModifier returns nothing",
        description: "",
        parameters: [
            { label: 'fogmodifier', name: 'whichFogModifier', documentation: "" },
      ],
    
    },
    FogModifierStart: {
        completion: "native FogModifierStart takes fogmodifier whichFogModifier returns nothing",
        description: "",
        parameters: [
            { label: 'fogmodifier', name: 'whichFogModifier', documentation: "" },
      ],
    
    },
    FogModifierStop: {
        completion: "native FogModifierStop takes fogmodifier whichFogModifier returns nothing",
        description: "",
        parameters: [
            { label: 'fogmodifier', name: 'whichFogModifier', documentation: "" },
      ],
    
    },
    VersionGet: {
        completion: "native VersionGet takes nothing returns version",
        description: "",
    
    },
    VersionCompatible: {
        completion: "native VersionCompatible takes version whichVersion returns boolean",
        description: "",
        parameters: [
            { label: 'version', name: 'whichVersion', documentation: "" },
      ],
    
    },
    VersionSupported: {
        completion: "native VersionSupported takes version whichVersion returns boolean",
        description: "",
        parameters: [
            { label: 'version', name: 'whichVersion', documentation: "" },
      ],
    
    },
    EndGame: {
        completion: "native EndGame takes boolean doScoreScreen returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'doScoreScreen', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    ChangeLevel: {
        completion: "native ChangeLevel takes string newLevel, boolean doScoreScreen returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'newLevel', documentation: "strings variables hold a series of characters" },
            { label: 'boolean', name: 'doScoreScreen', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    RestartGame: {
        completion: "native RestartGame takes boolean doScoreScreen returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'doScoreScreen', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    ReloadGame: {
        completion: "native ReloadGame takes nothing returns nothing",
        description: "",
    
    },
    SetCampaignMenuRace: {
        completion: "native SetCampaignMenuRace takes race r returns nothing",
        description: "",
        parameters: [
            { label: 'race', name: 'r', documentation: "" },
      ],
    
    },
    SetCampaignMenuRaceEx: {
        completion: "native SetCampaignMenuRaceEx takes integer campaignIndex returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'campaignIndex', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ForceCampaignSelectScreen: {
        completion: "native ForceCampaignSelectScreen takes nothing returns nothing",
        description: "",
    
    },
    LoadGame: {
        completion: "native LoadGame takes string saveFileName, boolean doScoreScreen returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'saveFileName', documentation: "strings variables hold a series of characters" },
            { label: 'boolean', name: 'doScoreScreen', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SaveGame: {
        completion: "native SaveGame takes string saveFileName returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'saveFileName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    RenameSaveDirectory: {
        completion: "native RenameSaveDirectory takes string sourceDirName, string destDirName returns boolean",
        description: "",
        parameters: [
            { label: 'string', name: 'sourceDirName', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'destDirName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    RemoveSaveDirectory: {
        completion: "native RemoveSaveDirectory takes string sourceDirName returns boolean",
        description: "",
        parameters: [
            { label: 'string', name: 'sourceDirName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    CopySaveGame: {
        completion: "native CopySaveGame takes string sourceSaveName, string destSaveName returns boolean",
        description: "",
        parameters: [
            { label: 'string', name: 'sourceSaveName', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'destSaveName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SaveGameExists: {
        completion: "native SaveGameExists takes string saveName returns boolean",
        description: "",
        parameters: [
            { label: 'string', name: 'saveName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SyncSelections: {
        completion: "native SyncSelections takes nothing returns nothing",
        description: "",
    
    },
    SetFloatGameState: {
        completion: "native SetFloatGameState takes fgamestate whichFloatGameState, real value returns nothing",
        description: "",
        parameters: [
            { label: 'fgamestate', name: 'whichFloatGameState', documentation: "" },
            { label: 'real', name: 'value', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetFloatGameState: {
        completion: "constant native GetFloatGameState takes fgamestate whichFloatGameState returns real",
        description: "",
        parameters: [
            { label: 'fgamestate', name: 'whichFloatGameState', documentation: "" },
      ],
    
    },
    SetIntegerGameState: {
        completion: "native SetIntegerGameState takes igamestate whichIntegerGameState, integer value returns nothing",
        description: "",
        parameters: [
            { label: 'igamestate', name: 'whichIntegerGameState', documentation: "" },
            { label: 'integer', name: 'value', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetIntegerGameState: {
        completion: "constant native GetIntegerGameState takes igamestate whichIntegerGameState returns integer",
        description: "",
        parameters: [
            { label: 'igamestate', name: 'whichIntegerGameState', documentation: "" },
      ],
    
    },
    SetTutorialCleared: {
        completion: "native SetTutorialCleared takes boolean cleared returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'cleared', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetMissionAvailable: {
        completion: "native SetMissionAvailable takes integer campaignNumber, integer missionNumber, boolean available returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'campaignNumber', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'missionNumber', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'available', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetCampaignAvailable: {
        completion: "native SetCampaignAvailable takes integer campaignNumber, boolean available returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'campaignNumber', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'available', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetOpCinematicAvailable: {
        completion: "native SetOpCinematicAvailable takes integer campaignNumber, boolean available returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'campaignNumber', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'available', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetEdCinematicAvailable: {
        completion: "native SetEdCinematicAvailable takes integer campaignNumber, boolean available returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'campaignNumber', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'available', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetDefaultDifficulty: {
        completion: "native GetDefaultDifficulty takes nothing returns gamedifficulty",
        description: "",
    
    },
    SetDefaultDifficulty: {
        completion: "native SetDefaultDifficulty takes gamedifficulty g returns nothing",
        description: "",
        parameters: [
            { label: 'gamedifficulty', name: 'g', documentation: "" },
      ],
    
    },
    SetCustomCampaignButtonVisible: {
        completion: "native SetCustomCampaignButtonVisible takes integer whichButton, boolean visible returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'whichButton', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'visible', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetCustomCampaignButtonVisible: {
        completion: "native GetCustomCampaignButtonVisible takes integer whichButton returns boolean",
        description: "",
        parameters: [
            { label: 'integer', name: 'whichButton', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    DoNotSaveReplay: {
        completion: "native DoNotSaveReplay takes nothing returns nothing",
        description: "",
    
    },
    DialogCreate: {
        completion: "native DialogCreate takes nothing returns dialog",
        description: "",
    
    },
    DialogDestroy: {
        completion: "native DialogDestroy takes dialog whichDialog returns nothing",
        description: "",
        parameters: [
            { label: 'dialog', name: 'whichDialog', documentation: "" },
      ],
    
    },
    DialogClear: {
        completion: "native DialogClear takes dialog whichDialog returns nothing",
        description: "",
        parameters: [
            { label: 'dialog', name: 'whichDialog', documentation: "" },
      ],
    
    },
    DialogSetMessage: {
        completion: "native DialogSetMessage takes dialog whichDialog, string messageText returns nothing",
        description: "",
        parameters: [
            { label: 'dialog', name: 'whichDialog', documentation: "" },
            { label: 'string', name: 'messageText', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    DialogAddButton: {
        completion: "native DialogAddButton takes dialog whichDialog, string buttonText, integer hotkey returns button",
        description: "",
        parameters: [
            { label: 'dialog', name: 'whichDialog', documentation: "" },
            { label: 'string', name: 'buttonText', documentation: "strings variables hold a series of characters" },
            { label: 'integer', name: 'hotkey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    DialogAddQuitButton: {
        completion: "native DialogAddQuitButton takes dialog whichDialog, boolean doScoreScreen, string buttonText, integer hotkey returns button",
        description: "",
        parameters: [
            { label: 'dialog', name: 'whichDialog', documentation: "" },
            { label: 'boolean', name: 'doScoreScreen', documentation: "boolean variables can take the values true of false" },
            { label: 'string', name: 'buttonText', documentation: "strings variables hold a series of characters" },
            { label: 'integer', name: 'hotkey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    DialogDisplay: {
        completion: "native DialogDisplay takes player whichPlayer, dialog whichDialog, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'dialog', name: 'whichDialog', documentation: "" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    ReloadGameCachesFromDisk: {
        completion: "native ReloadGameCachesFromDisk takes nothing returns boolean",
        description: "",
    
    },
    InitGameCache: {
        completion: "native InitGameCache takes string campaignFile returns gamecache",
        description: "",
        parameters: [
            { label: 'string', name: 'campaignFile', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SaveGameCache: {
        completion: "native SaveGameCache takes gamecache whichCache returns boolean",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'whichCache', documentation: "" },
      ],
    
    },
    StoreInteger: {
        completion: "native StoreInteger takes gamecache cache, string missionKey, string key, integer value returns nothing",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
            { label: 'integer', name: 'value', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    StoreReal: {
        completion: "native StoreReal takes gamecache cache, string missionKey, string key, real value returns nothing",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
            { label: 'real', name: 'value', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    StoreBoolean: {
        completion: "native StoreBoolean takes gamecache cache, string missionKey, string key, boolean value returns nothing",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
            { label: 'boolean', name: 'value', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    StoreUnit: {
        completion: "native StoreUnit takes gamecache cache, string missionKey, string key, unit whichUnit returns boolean",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    StoreString: {
        completion: "native StoreString takes gamecache cache, string missionKey, string key, string value returns boolean",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'value', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SyncStoredInteger: {
        completion: "native SyncStoredInteger takes gamecache cache, string missionKey, string key returns nothing",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SyncStoredReal: {
        completion: "native SyncStoredReal takes gamecache cache, string missionKey, string key returns nothing",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SyncStoredBoolean: {
        completion: "native SyncStoredBoolean takes gamecache cache, string missionKey, string key returns nothing",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SyncStoredUnit: {
        completion: "native SyncStoredUnit takes gamecache cache, string missionKey, string key returns nothing",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SyncStoredString: {
        completion: "native SyncStoredString takes gamecache cache, string missionKey, string key returns nothing",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    GetStoredInteger: {
        completion: "native GetStoredInteger takes gamecache cache, string missionKey, string key returns integer",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    GetStoredReal: {
        completion: "native GetStoredReal takes gamecache cache, string missionKey, string key returns real",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    GetStoredBoolean: {
        completion: "native GetStoredBoolean takes gamecache cache, string missionKey, string key returns boolean",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    GetStoredString: {
        completion: "native GetStoredString takes gamecache cache, string missionKey, string key returns string",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    RestoreUnit: {
        completion: "native RestoreUnit takes gamecache cache, string missionKey, string key, player forWhichPlayer, real x, real y, real facing returns unit",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
            { label: 'player', name: 'forWhichPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'facing', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    HaveStoredInteger: {
        completion: "native HaveStoredInteger takes gamecache cache, string missionKey, string key returns boolean",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    HaveStoredReal: {
        completion: "native HaveStoredReal takes gamecache cache, string missionKey, string key returns boolean",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    HaveStoredBoolean: {
        completion: "native HaveStoredBoolean takes gamecache cache, string missionKey, string key returns boolean",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    HaveStoredUnit: {
        completion: "native HaveStoredUnit takes gamecache cache, string missionKey, string key returns boolean",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    HaveStoredString: {
        completion: "native HaveStoredString takes gamecache cache, string missionKey, string key returns boolean",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    FlushGameCache: {
        completion: "native FlushGameCache takes gamecache cache returns nothing",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
      ],
    
    },
    FlushStoredMission: {
        completion: "native FlushStoredMission takes gamecache cache, string missionKey returns nothing",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    FlushStoredInteger: {
        completion: "native FlushStoredInteger takes gamecache cache, string missionKey, string key returns nothing",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    FlushStoredReal: {
        completion: "native FlushStoredReal takes gamecache cache, string missionKey, string key returns nothing",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    FlushStoredBoolean: {
        completion: "native FlushStoredBoolean takes gamecache cache, string missionKey, string key returns nothing",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    FlushStoredUnit: {
        completion: "native FlushStoredUnit takes gamecache cache, string missionKey, string key returns nothing",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    FlushStoredString: {
        completion: "native FlushStoredString takes gamecache cache, string missionKey, string key returns nothing",
        description: "",
        parameters: [
            { label: 'gamecache', name: 'cache', documentation: "" },
            { label: 'string', name: 'missionKey', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    GetRandomInt: {
        completion: "native GetRandomInt takes integer lowBound, integer highBound returns integer",
        description: "",
        parameters: [
            { label: 'integer', name: 'lowBound', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'highBound', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetRandomReal: {
        completion: "native GetRandomReal takes real lowBound, real highBound returns real",
        description: "",
        parameters: [
            { label: 'real', name: 'lowBound', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'highBound', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CreateUnitPool: {
        completion: "native CreateUnitPool takes nothing returns unitpool",
        description: "",
    
    },
    DestroyUnitPool: {
        completion: "native DestroyUnitPool takes unitpool whichPool returns nothing",
        description: "",
        parameters: [
            { label: 'unitpool', name: 'whichPool', documentation: "" },
      ],
    
    },
    UnitPoolAddUnitType: {
        completion: "native UnitPoolAddUnitType takes unitpool whichPool, integer unitId, real weight returns nothing",
        description: "",
        parameters: [
            { label: 'unitpool', name: 'whichPool', documentation: "" },
            { label: 'integer', name: 'unitId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'weight', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    UnitPoolRemoveUnitType: {
        completion: "native UnitPoolRemoveUnitType takes unitpool whichPool, integer unitId returns nothing",
        description: "",
        parameters: [
            { label: 'unitpool', name: 'whichPool', documentation: "" },
            { label: 'integer', name: 'unitId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    PlaceRandomUnit: {
        completion: "native PlaceRandomUnit takes unitpool whichPool, player forWhichPlayer, real x, real y, real facing returns unit",
        description: "",
        parameters: [
            { label: 'unitpool', name: 'whichPool', documentation: "" },
            { label: 'player', name: 'forWhichPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'facing', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CreateItemPool: {
        completion: "native CreateItemPool takes nothing returns itempool",
        description: "",
    
    },
    DestroyItemPool: {
        completion: "native DestroyItemPool takes itempool whichItemPool returns nothing",
        description: "",
        parameters: [
            { label: 'itempool', name: 'whichItemPool', documentation: "" },
      ],
    
    },
    ItemPoolAddItemType: {
        completion: "native ItemPoolAddItemType takes itempool whichItemPool, integer itemId, real weight returns nothing",
        description: "",
        parameters: [
            { label: 'itempool', name: 'whichItemPool', documentation: "" },
            { label: 'integer', name: 'itemId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'weight', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    ItemPoolRemoveItemType: {
        completion: "native ItemPoolRemoveItemType takes itempool whichItemPool, integer itemId returns nothing",
        description: "",
        parameters: [
            { label: 'itempool', name: 'whichItemPool', documentation: "" },
            { label: 'integer', name: 'itemId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    PlaceRandomItem: {
        completion: "native PlaceRandomItem takes itempool whichItemPool, real x, real y returns item",
        description: "",
        parameters: [
            { label: 'itempool', name: 'whichItemPool', documentation: "" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    ChooseRandomCreep: {
        completion: "native ChooseRandomCreep takes integer level returns integer",
        description: "",
        parameters: [
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ChooseRandomNPBuilding: {
        completion: "native ChooseRandomNPBuilding takes nothing returns integer",
        description: "",
    
    },
    ChooseRandomItem: {
        completion: "native ChooseRandomItem takes integer level returns integer",
        description: "",
        parameters: [
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ChooseRandomItemEx: {
        completion: "native ChooseRandomItemEx takes itemtype whichType, integer level returns integer",
        description: "",
        parameters: [
            { label: 'itemtype', name: 'whichType', documentation: "" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetRandomSeed: {
        completion: "native SetRandomSeed takes integer seed returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'seed', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetTerrainFog: {
        completion: "native SetTerrainFog takes real a, real b, real c, real d, real e returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'a', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'b', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'c', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'd', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'e', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    ResetTerrainFog: {
        completion: "native ResetTerrainFog takes nothing returns nothing",
        description: "",
    
    },
    SetUnitFog: {
        completion: "native SetUnitFog takes real a, real b, real c, real d, real e returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'a', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'b', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'c', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'd', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'e', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetTerrainFogEx: {
        completion: "native SetTerrainFogEx takes integer style, real zstart, real zend, real density, real red, real green, real blue returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'style', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'zstart', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'zend', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'density', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'red', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'green', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'blue', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    DisplayTextToPlayer: {
        completion: "native DisplayTextToPlayer takes player toPlayer, real x, real y, string message returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'toPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'string', name: 'message', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    DisplayTimedTextToPlayer: {
        completion: "native DisplayTimedTextToPlayer takes player toPlayer, real x, real y, real duration, string message returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'toPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
            { label: 'string', name: 'message', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    DisplayTimedTextFromPlayer: {
        completion: "native DisplayTimedTextFromPlayer takes player toPlayer, real x, real y, real duration, string message returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'toPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
            { label: 'string', name: 'message', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    ClearTextMessages: {
        completion: "native ClearTextMessages takes nothing returns nothing",
        description: "",
    
    },
    SetDayNightModels: {
        completion: "native SetDayNightModels takes string terrainDNCFile, string unitDNCFile returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'terrainDNCFile', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'unitDNCFile', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SetSkyModel: {
        completion: "native SetSkyModel takes string skyModelFile returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'skyModelFile', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    EnableUserControl: {
        completion: "native EnableUserControl takes boolean b returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'b', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    EnableUserUI: {
        completion: "native EnableUserUI takes boolean b returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'b', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SuspendTimeOfDay: {
        completion: "native SuspendTimeOfDay takes boolean b returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'b', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetTimeOfDayScale: {
        completion: "native SetTimeOfDayScale takes real r returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'r', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetTimeOfDayScale: {
        completion: "native GetTimeOfDayScale takes nothing returns real",
        description: "",
    
    },
    ShowInterface: {
        completion: "native ShowInterface takes boolean flag, real fadeDuration returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
            { label: 'real', name: 'fadeDuration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    PauseGame: {
        completion: "native PauseGame takes boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    UnitAddIndicator: {
        completion: "native UnitAddIndicator takes unit whichUnit, integer red, integer green, integer blue, integer alpha returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'red', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'green', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'blue', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'alpha', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    AddIndicator: {
        completion: "native AddIndicator takes widget whichWidget, integer red, integer green, integer blue, integer alpha returns nothing",
        description: "",
        parameters: [
            { label: 'widget', name: 'whichWidget', documentation: "an interactive game object with life" },
            { label: 'integer', name: 'red', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'green', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'blue', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'alpha', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    PingMinimap: {
        completion: "native PingMinimap takes real x, real y, real duration returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    PingMinimapEx: {
        completion: "native PingMinimapEx takes real x, real y, real duration, integer red, integer green, integer blue, boolean extraEffects returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
            { label: 'integer', name: 'red', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'green', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'blue', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'extraEffects', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    EnableOcclusion: {
        completion: "native EnableOcclusion takes boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetIntroShotText: {
        completion: "native SetIntroShotText takes string introText returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'introText', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SetIntroShotModel: {
        completion: "native SetIntroShotModel takes string introModelPath returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'introModelPath', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    EnableWorldFogBoundary: {
        completion: "native EnableWorldFogBoundary takes boolean b returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'b', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    PlayModelCinematic: {
        completion: "native PlayModelCinematic takes string modelName returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'modelName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    PlayCinematic: {
        completion: "native PlayCinematic takes string movieName returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'movieName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    ForceUIKey: {
        completion: "native ForceUIKey takes string key returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'key', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    ForceUICancel: {
        completion: "native ForceUICancel takes nothing returns nothing",
        description: "",
    
    },
    DisplayLoadDialog: {
        completion: "native DisplayLoadDialog takes nothing returns nothing",
        description: "",
    
    },
    SetAltMinimapIcon: {
        completion: "native SetAltMinimapIcon takes string iconPath returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'iconPath', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    DisableRestartMission: {
        completion: "native DisableRestartMission takes boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    CreateTextTag: {
        completion: "native CreateTextTag takes nothing returns texttag",
        description: "",
    
    },
    DestroyTextTag: {
        completion: "native DestroyTextTag takes texttag t returns nothing",
        description: "",
        parameters: [
            { label: 'texttag', name: 't', documentation: "" },
      ],
    
    },
    SetTextTagText: {
        completion: "native SetTextTagText takes texttag t, string s, real height returns nothing",
        description: "",
        parameters: [
            { label: 'texttag', name: 't', documentation: "" },
            { label: 'string', name: 's', documentation: "strings variables hold a series of characters" },
            { label: 'real', name: 'height', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetTextTagPos: {
        completion: "native SetTextTagPos takes texttag t, real x, real y, real heightOffset returns nothing",
        description: "",
        parameters: [
            { label: 'texttag', name: 't', documentation: "" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'heightOffset', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetTextTagPosUnit: {
        completion: "native SetTextTagPosUnit takes texttag t, unit whichUnit, real heightOffset returns nothing",
        description: "",
        parameters: [
            { label: 'texttag', name: 't', documentation: "" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'heightOffset', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetTextTagColor: {
        completion: "native SetTextTagColor takes texttag t, integer red, integer green, integer blue, integer alpha returns nothing",
        description: "",
        parameters: [
            { label: 'texttag', name: 't', documentation: "" },
            { label: 'integer', name: 'red', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'green', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'blue', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'alpha', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetTextTagVelocity: {
        completion: "native SetTextTagVelocity takes texttag t, real xvel, real yvel returns nothing",
        description: "",
        parameters: [
            { label: 'texttag', name: 't', documentation: "" },
            { label: 'real', name: 'xvel', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'yvel', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetTextTagVisibility: {
        completion: "native SetTextTagVisibility takes texttag t, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'texttag', name: 't', documentation: "" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetTextTagSuspended: {
        completion: "native SetTextTagSuspended takes texttag t, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'texttag', name: 't', documentation: "" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetTextTagPermanent: {
        completion: "native SetTextTagPermanent takes texttag t, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'texttag', name: 't', documentation: "" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetTextTagAge: {
        completion: "native SetTextTagAge takes texttag t, real age returns nothing",
        description: "",
        parameters: [
            { label: 'texttag', name: 't', documentation: "" },
            { label: 'real', name: 'age', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetTextTagLifespan: {
        completion: "native SetTextTagLifespan takes texttag t, real lifespan returns nothing",
        description: "",
        parameters: [
            { label: 'texttag', name: 't', documentation: "" },
            { label: 'real', name: 'lifespan', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetTextTagFadepoint: {
        completion: "native SetTextTagFadepoint takes texttag t, real fadepoint returns nothing",
        description: "",
        parameters: [
            { label: 'texttag', name: 't', documentation: "" },
            { label: 'real', name: 'fadepoint', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetReservedLocalHeroButtons: {
        completion: "native SetReservedLocalHeroButtons takes integer reserved returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'reserved', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetAllyColorFilterState: {
        completion: "native GetAllyColorFilterState takes nothing returns integer",
        description: "",
    
    },
    SetAllyColorFilterState: {
        completion: "native SetAllyColorFilterState takes integer state returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'state', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetCreepCampFilterState: {
        completion: "native GetCreepCampFilterState takes nothing returns boolean",
        description: "",
    
    },
    SetCreepCampFilterState: {
        completion: "native SetCreepCampFilterState takes boolean state returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'state', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    EnableMinimapFilterButtons: {
        completion: "native EnableMinimapFilterButtons takes boolean enableAlly, boolean enableCreep returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'enableAlly', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'enableCreep', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    EnableDragSelect: {
        completion: "native EnableDragSelect takes boolean state, boolean ui returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'state', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'ui', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    EnablePreSelect: {
        completion: "native EnablePreSelect takes boolean state, boolean ui returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'state', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'ui', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    EnableSelect: {
        completion: "native EnableSelect takes boolean state, boolean ui returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'state', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'ui', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    CreateTrackable: {
        completion: "native CreateTrackable takes string trackableModelPath, real x, real y, real facing returns trackable",
        description: "",
        parameters: [
            { label: 'string', name: 'trackableModelPath', documentation: "strings variables hold a series of characters" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'facing', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CreateQuest: {
        completion: "native CreateQuest takes nothing returns quest",
        description: "",
    
    },
    DestroyQuest: {
        completion: "native DestroyQuest takes quest whichQuest returns nothing",
        description: "",
        parameters: [
            { label: 'quest', name: 'whichQuest', documentation: "" },
      ],
    
    },
    QuestSetTitle: {
        completion: "native QuestSetTitle takes quest whichQuest, string title returns nothing",
        description: "",
        parameters: [
            { label: 'quest', name: 'whichQuest', documentation: "" },
            { label: 'string', name: 'title', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    QuestSetDescription: {
        completion: "native QuestSetDescription takes quest whichQuest, string description returns nothing",
        description: "",
        parameters: [
            { label: 'quest', name: 'whichQuest', documentation: "" },
            { label: 'string', name: 'description', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    QuestSetIconPath: {
        completion: "native QuestSetIconPath takes quest whichQuest, string iconPath returns nothing",
        description: "",
        parameters: [
            { label: 'quest', name: 'whichQuest', documentation: "" },
            { label: 'string', name: 'iconPath', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    QuestSetRequired: {
        completion: "native QuestSetRequired takes quest whichQuest, boolean required returns nothing",
        description: "",
        parameters: [
            { label: 'quest', name: 'whichQuest', documentation: "" },
            { label: 'boolean', name: 'required', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    QuestSetCompleted: {
        completion: "native QuestSetCompleted takes quest whichQuest, boolean completed returns nothing",
        description: "",
        parameters: [
            { label: 'quest', name: 'whichQuest', documentation: "" },
            { label: 'boolean', name: 'completed', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    QuestSetDiscovered: {
        completion: "native QuestSetDiscovered takes quest whichQuest, boolean discovered returns nothing",
        description: "",
        parameters: [
            { label: 'quest', name: 'whichQuest', documentation: "" },
            { label: 'boolean', name: 'discovered', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    QuestSetFailed: {
        completion: "native QuestSetFailed takes quest whichQuest, boolean failed returns nothing",
        description: "",
        parameters: [
            { label: 'quest', name: 'whichQuest', documentation: "" },
            { label: 'boolean', name: 'failed', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    QuestSetEnabled: {
        completion: "native QuestSetEnabled takes quest whichQuest, boolean enabled returns nothing",
        description: "",
        parameters: [
            { label: 'quest', name: 'whichQuest', documentation: "" },
            { label: 'boolean', name: 'enabled', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    IsQuestRequired: {
        completion: "native IsQuestRequired takes quest whichQuest returns boolean",
        description: "",
        parameters: [
            { label: 'quest', name: 'whichQuest', documentation: "" },
      ],
    
    },
    IsQuestCompleted: {
        completion: "native IsQuestCompleted takes quest whichQuest returns boolean",
        description: "",
        parameters: [
            { label: 'quest', name: 'whichQuest', documentation: "" },
      ],
    
    },
    IsQuestDiscovered: {
        completion: "native IsQuestDiscovered takes quest whichQuest returns boolean",
        description: "",
        parameters: [
            { label: 'quest', name: 'whichQuest', documentation: "" },
      ],
    
    },
    IsQuestFailed: {
        completion: "native IsQuestFailed takes quest whichQuest returns boolean",
        description: "",
        parameters: [
            { label: 'quest', name: 'whichQuest', documentation: "" },
      ],
    
    },
    IsQuestEnabled: {
        completion: "native IsQuestEnabled takes quest whichQuest returns boolean",
        description: "",
        parameters: [
            { label: 'quest', name: 'whichQuest', documentation: "" },
      ],
    
    },
    QuestCreateItem: {
        completion: "native QuestCreateItem takes quest whichQuest returns questitem",
        description: "",
        parameters: [
            { label: 'quest', name: 'whichQuest', documentation: "" },
      ],
    
    },
    QuestItemSetDescription: {
        completion: "native QuestItemSetDescription takes questitem whichQuestItem, string description returns nothing",
        description: "",
        parameters: [
            { label: 'questitem', name: 'whichQuestItem', documentation: "" },
            { label: 'string', name: 'description', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    QuestItemSetCompleted: {
        completion: "native QuestItemSetCompleted takes questitem whichQuestItem, boolean completed returns nothing",
        description: "",
        parameters: [
            { label: 'questitem', name: 'whichQuestItem', documentation: "" },
            { label: 'boolean', name: 'completed', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    IsQuestItemCompleted: {
        completion: "native IsQuestItemCompleted takes questitem whichQuestItem returns boolean",
        description: "",
        parameters: [
            { label: 'questitem', name: 'whichQuestItem', documentation: "" },
      ],
    
    },
    CreateDefeatCondition: {
        completion: "native CreateDefeatCondition takes nothing returns defeatcondition",
        description: "",
    
    },
    DestroyDefeatCondition: {
        completion: "native DestroyDefeatCondition takes defeatcondition whichCondition returns nothing",
        description: "",
        parameters: [
            { label: 'defeatcondition', name: 'whichCondition', documentation: "" },
      ],
    
    },
    DefeatConditionSetDescription: {
        completion: "native DefeatConditionSetDescription takes defeatcondition whichCondition, string description returns nothing",
        description: "",
        parameters: [
            { label: 'defeatcondition', name: 'whichCondition', documentation: "" },
            { label: 'string', name: 'description', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    FlashQuestDialogButton: {
        completion: "native FlashQuestDialogButton takes nothing returns nothing",
        description: "",
    
    },
    ForceQuestDialogUpdate: {
        completion: "native ForceQuestDialogUpdate takes nothing returns nothing",
        description: "",
    
    },
    CreateTimerDialog: {
        completion: "native CreateTimerDialog takes timer t returns timerdialog",
        description: "",
        parameters: [
            { label: 'timer', name: 't', documentation: "a timer reference" },
      ],
    
    },
    DestroyTimerDialog: {
        completion: "native DestroyTimerDialog takes timerdialog whichDialog returns nothing",
        description: "",
        parameters: [
            { label: 'timerdialog', name: 'whichDialog', documentation: "" },
      ],
    
    },
    TimerDialogSetTitle: {
        completion: "native TimerDialogSetTitle takes timerdialog whichDialog, string title returns nothing",
        description: "",
        parameters: [
            { label: 'timerdialog', name: 'whichDialog', documentation: "" },
            { label: 'string', name: 'title', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    TimerDialogSetTitleColor: {
        completion: "native TimerDialogSetTitleColor takes timerdialog whichDialog, integer red, integer green, integer blue, integer alpha returns nothing",
        description: "",
        parameters: [
            { label: 'timerdialog', name: 'whichDialog', documentation: "" },
            { label: 'integer', name: 'red', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'green', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'blue', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'alpha', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    TimerDialogSetTimeColor: {
        completion: "native TimerDialogSetTimeColor takes timerdialog whichDialog, integer red, integer green, integer blue, integer alpha returns nothing",
        description: "",
        parameters: [
            { label: 'timerdialog', name: 'whichDialog', documentation: "" },
            { label: 'integer', name: 'red', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'green', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'blue', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'alpha', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    TimerDialogSetSpeed: {
        completion: "native TimerDialogSetSpeed takes timerdialog whichDialog, real speedMultFactor returns nothing",
        description: "",
        parameters: [
            { label: 'timerdialog', name: 'whichDialog', documentation: "" },
            { label: 'real', name: 'speedMultFactor', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    TimerDialogDisplay: {
        completion: "native TimerDialogDisplay takes timerdialog whichDialog, boolean display returns nothing",
        description: "",
        parameters: [
            { label: 'timerdialog', name: 'whichDialog', documentation: "" },
            { label: 'boolean', name: 'display', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    IsTimerDialogDisplayed: {
        completion: "native IsTimerDialogDisplayed takes timerdialog whichDialog returns boolean",
        description: "",
        parameters: [
            { label: 'timerdialog', name: 'whichDialog', documentation: "" },
      ],
    
    },
    TimerDialogSetRealTimeRemaining: {
        completion: "native TimerDialogSetRealTimeRemaining takes timerdialog whichDialog, real timeRemaining returns nothing",
        description: "",
        parameters: [
            { label: 'timerdialog', name: 'whichDialog', documentation: "" },
            { label: 'real', name: 'timeRemaining', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CreateLeaderboard: {
        completion: "native CreateLeaderboard takes nothing returns leaderboard",
        description: "",
    
    },
    DestroyLeaderboard: {
        completion: "native DestroyLeaderboard takes leaderboard lb returns nothing",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
      ],
    
    },
    LeaderboardDisplay: {
        completion: "native LeaderboardDisplay takes leaderboard lb, boolean show returns nothing",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
            { label: 'boolean', name: 'show', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    IsLeaderboardDisplayed: {
        completion: "native IsLeaderboardDisplayed takes leaderboard lb returns boolean",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
      ],
    
    },
    LeaderboardGetItemCount: {
        completion: "native LeaderboardGetItemCount takes leaderboard lb returns integer",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
      ],
    
    },
    LeaderboardSetSizeByItemCount: {
        completion: "native LeaderboardSetSizeByItemCount takes leaderboard lb, integer count returns nothing",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
            { label: 'integer', name: 'count', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LeaderboardAddItem: {
        completion: "native LeaderboardAddItem takes leaderboard lb, string label, integer value, player p returns nothing",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
            { label: 'string', name: 'label', documentation: "strings variables hold a series of characters" },
            { label: 'integer', name: 'value', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'player', name: 'p', documentation: "a single player reference" },
      ],
    
    },
    LeaderboardRemoveItem: {
        completion: "native LeaderboardRemoveItem takes leaderboard lb, integer index returns nothing",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
            { label: 'integer', name: 'index', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LeaderboardRemovePlayerItem: {
        completion: "native LeaderboardRemovePlayerItem takes leaderboard lb, player p returns nothing",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
            { label: 'player', name: 'p', documentation: "a single player reference" },
      ],
    
    },
    LeaderboardClear: {
        completion: "native LeaderboardClear takes leaderboard lb returns nothing",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
      ],
    
    },
    LeaderboardSortItemsByValue: {
        completion: "native LeaderboardSortItemsByValue takes leaderboard lb, boolean ascending returns nothing",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
            { label: 'boolean', name: 'ascending', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    LeaderboardSortItemsByPlayer: {
        completion: "native LeaderboardSortItemsByPlayer takes leaderboard lb, boolean ascending returns nothing",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
            { label: 'boolean', name: 'ascending', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    LeaderboardSortItemsByLabel: {
        completion: "native LeaderboardSortItemsByLabel takes leaderboard lb, boolean ascending returns nothing",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
            { label: 'boolean', name: 'ascending', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    LeaderboardHasPlayerItem: {
        completion: "native LeaderboardHasPlayerItem takes leaderboard lb, player p returns boolean",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
            { label: 'player', name: 'p', documentation: "a single player reference" },
      ],
    
    },
    LeaderboardGetPlayerIndex: {
        completion: "native LeaderboardGetPlayerIndex takes leaderboard lb, player p returns integer",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
            { label: 'player', name: 'p', documentation: "a single player reference" },
      ],
    
    },
    LeaderboardSetLabel: {
        completion: "native LeaderboardSetLabel takes leaderboard lb, string label returns nothing",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
            { label: 'string', name: 'label', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    LeaderboardGetLabelText: {
        completion: "native LeaderboardGetLabelText takes leaderboard lb returns string",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
      ],
    
    },
    PlayerSetLeaderboard: {
        completion: "native PlayerSetLeaderboard takes player toPlayer, leaderboard lb returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'toPlayer', documentation: "a single player reference" },
            { label: 'leaderboard', name: 'lb', documentation: "" },
      ],
    
    },
    PlayerGetLeaderboard: {
        completion: "native PlayerGetLeaderboard takes player toPlayer returns leaderboard",
        description: "",
        parameters: [
            { label: 'player', name: 'toPlayer', documentation: "a single player reference" },
      ],
    
    },
    LeaderboardSetLabelColor: {
        completion: "native LeaderboardSetLabelColor takes leaderboard lb, integer red, integer green, integer blue, integer alpha returns nothing",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
            { label: 'integer', name: 'red', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'green', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'blue', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'alpha', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LeaderboardSetValueColor: {
        completion: "native LeaderboardSetValueColor takes leaderboard lb, integer red, integer green, integer blue, integer alpha returns nothing",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
            { label: 'integer', name: 'red', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'green', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'blue', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'alpha', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LeaderboardSetStyle: {
        completion: "native LeaderboardSetStyle takes leaderboard lb, boolean showLabel, boolean showNames, boolean showValues, boolean showIcons returns nothing",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
            { label: 'boolean', name: 'showLabel', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'showNames', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'showValues', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'showIcons', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    LeaderboardSetItemValue: {
        completion: "native LeaderboardSetItemValue takes leaderboard lb, integer whichItem, integer val returns nothing",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
            { label: 'integer', name: 'whichItem', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'val', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LeaderboardSetItemLabel: {
        completion: "native LeaderboardSetItemLabel takes leaderboard lb, integer whichItem, string val returns nothing",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
            { label: 'integer', name: 'whichItem', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'string', name: 'val', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    LeaderboardSetItemStyle: {
        completion: "native LeaderboardSetItemStyle takes leaderboard lb, integer whichItem, boolean showLabel, boolean showValue, boolean showIcon returns nothing",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
            { label: 'integer', name: 'whichItem', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'showLabel', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'showValue', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'showIcon', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    LeaderboardSetItemLabelColor: {
        completion: "native LeaderboardSetItemLabelColor takes leaderboard lb, integer whichItem, integer red, integer green, integer blue, integer alpha returns nothing",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
            { label: 'integer', name: 'whichItem', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'red', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'green', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'blue', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'alpha', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LeaderboardSetItemValueColor: {
        completion: "native LeaderboardSetItemValueColor takes leaderboard lb, integer whichItem, integer red, integer green, integer blue, integer alpha returns nothing",
        description: "",
        parameters: [
            { label: 'leaderboard', name: 'lb', documentation: "" },
            { label: 'integer', name: 'whichItem', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'red', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'green', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'blue', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'alpha', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    CreateMultiboard: {
        completion: "native CreateMultiboard takes nothing returns multiboard",
        description: "",
    
    },
    DestroyMultiboard: {
        completion: "native DestroyMultiboard takes multiboard lb returns nothing",
        description: "",
        parameters: [
            { label: 'multiboard', name: 'lb', documentation: "" },
      ],
    
    },
    MultiboardDisplay: {
        completion: "native MultiboardDisplay takes multiboard lb, boolean show returns nothing",
        description: "",
        parameters: [
            { label: 'multiboard', name: 'lb', documentation: "" },
            { label: 'boolean', name: 'show', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    IsMultiboardDisplayed: {
        completion: "native IsMultiboardDisplayed takes multiboard lb returns boolean",
        description: "",
        parameters: [
            { label: 'multiboard', name: 'lb', documentation: "" },
      ],
    
    },
    MultiboardMinimize: {
        completion: "native MultiboardMinimize takes multiboard lb, boolean minimize returns nothing",
        description: "",
        parameters: [
            { label: 'multiboard', name: 'lb', documentation: "" },
            { label: 'boolean', name: 'minimize', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    IsMultiboardMinimized: {
        completion: "native IsMultiboardMinimized takes multiboard lb returns boolean",
        description: "",
        parameters: [
            { label: 'multiboard', name: 'lb', documentation: "" },
      ],
    
    },
    MultiboardClear: {
        completion: "native MultiboardClear takes multiboard lb returns nothing",
        description: "",
        parameters: [
            { label: 'multiboard', name: 'lb', documentation: "" },
      ],
    
    },
    MultiboardSetTitleText: {
        completion: "native MultiboardSetTitleText takes multiboard lb, string label returns nothing",
        description: "",
        parameters: [
            { label: 'multiboard', name: 'lb', documentation: "" },
            { label: 'string', name: 'label', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    MultiboardGetTitleText: {
        completion: "native MultiboardGetTitleText takes multiboard lb returns string",
        description: "",
        parameters: [
            { label: 'multiboard', name: 'lb', documentation: "" },
      ],
    
    },
    MultiboardSetTitleTextColor: {
        completion: "native MultiboardSetTitleTextColor takes multiboard lb, integer red, integer green, integer blue, integer alpha returns nothing",
        description: "",
        parameters: [
            { label: 'multiboard', name: 'lb', documentation: "" },
            { label: 'integer', name: 'red', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'green', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'blue', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'alpha', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    MultiboardGetRowCount: {
        completion: "native MultiboardGetRowCount takes multiboard lb returns integer",
        description: "",
        parameters: [
            { label: 'multiboard', name: 'lb', documentation: "" },
      ],
    
    },
    MultiboardGetColumnCount: {
        completion: "native MultiboardGetColumnCount takes multiboard lb returns integer",
        description: "",
        parameters: [
            { label: 'multiboard', name: 'lb', documentation: "" },
      ],
    
    },
    MultiboardSetColumnCount: {
        completion: "native MultiboardSetColumnCount takes multiboard lb, integer count returns nothing",
        description: "",
        parameters: [
            { label: 'multiboard', name: 'lb', documentation: "" },
            { label: 'integer', name: 'count', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    MultiboardSetRowCount: {
        completion: "native MultiboardSetRowCount takes multiboard lb, integer count returns nothing",
        description: "",
        parameters: [
            { label: 'multiboard', name: 'lb', documentation: "" },
            { label: 'integer', name: 'count', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    MultiboardSetItemsStyle: {
        completion: "native MultiboardSetItemsStyle takes multiboard lb, boolean showValues, boolean showIcons returns nothing",
        description: "",
        parameters: [
            { label: 'multiboard', name: 'lb', documentation: "" },
            { label: 'boolean', name: 'showValues', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'showIcons', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    MultiboardSetItemsValue: {
        completion: "native MultiboardSetItemsValue takes multiboard lb, string value returns nothing",
        description: "",
        parameters: [
            { label: 'multiboard', name: 'lb', documentation: "" },
            { label: 'string', name: 'value', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    MultiboardSetItemsValueColor: {
        completion: "native MultiboardSetItemsValueColor takes multiboard lb, integer red, integer green, integer blue, integer alpha returns nothing",
        description: "",
        parameters: [
            { label: 'multiboard', name: 'lb', documentation: "" },
            { label: 'integer', name: 'red', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'green', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'blue', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'alpha', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    MultiboardSetItemsWidth: {
        completion: "native MultiboardSetItemsWidth takes multiboard lb, real width returns nothing",
        description: "",
        parameters: [
            { label: 'multiboard', name: 'lb', documentation: "" },
            { label: 'real', name: 'width', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    MultiboardSetItemsIcon: {
        completion: "native MultiboardSetItemsIcon takes multiboard lb, string iconPath returns nothing",
        description: "",
        parameters: [
            { label: 'multiboard', name: 'lb', documentation: "" },
            { label: 'string', name: 'iconPath', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    MultiboardGetItem: {
        completion: "native MultiboardGetItem takes multiboard lb, integer row, integer column returns multiboarditem",
        description: "",
        parameters: [
            { label: 'multiboard', name: 'lb', documentation: "" },
            { label: 'integer', name: 'row', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'column', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    MultiboardReleaseItem: {
        completion: "native MultiboardReleaseItem takes multiboarditem mbi returns nothing",
        description: "",
        parameters: [
            { label: 'multiboarditem', name: 'mbi', documentation: "" },
      ],
    
    },
    MultiboardSetItemStyle: {
        completion: "native MultiboardSetItemStyle takes multiboarditem mbi, boolean showValue, boolean showIcon returns nothing",
        description: "",
        parameters: [
            { label: 'multiboarditem', name: 'mbi', documentation: "" },
            { label: 'boolean', name: 'showValue', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'showIcon', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    MultiboardSetItemValue: {
        completion: "native MultiboardSetItemValue takes multiboarditem mbi, string val returns nothing",
        description: "",
        parameters: [
            { label: 'multiboarditem', name: 'mbi', documentation: "" },
            { label: 'string', name: 'val', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    MultiboardSetItemValueColor: {
        completion: "native MultiboardSetItemValueColor takes multiboarditem mbi, integer red, integer green, integer blue, integer alpha returns nothing",
        description: "",
        parameters: [
            { label: 'multiboarditem', name: 'mbi', documentation: "" },
            { label: 'integer', name: 'red', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'green', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'blue', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'alpha', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    MultiboardSetItemWidth: {
        completion: "native MultiboardSetItemWidth takes multiboarditem mbi, real width returns nothing",
        description: "",
        parameters: [
            { label: 'multiboarditem', name: 'mbi', documentation: "" },
            { label: 'real', name: 'width', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    MultiboardSetItemIcon: {
        completion: "native MultiboardSetItemIcon takes multiboarditem mbi, string iconFileName returns nothing",
        description: "",
        parameters: [
            { label: 'multiboarditem', name: 'mbi', documentation: "" },
            { label: 'string', name: 'iconFileName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    MultiboardSuppressDisplay: {
        completion: "native MultiboardSuppressDisplay takes boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetCameraPosition: {
        completion: "native SetCameraPosition takes real x, real y returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetCameraQuickPosition: {
        completion: "native SetCameraQuickPosition takes real x, real y returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetCameraBounds: {
        completion: "native SetCameraBounds takes real x1, real y1, real x2, real y2, real x3, real y3, real x4, real y4 returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'x1', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y1', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'x2', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y2', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'x3', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y3', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'x4', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y4', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    StopCamera: {
        completion: "native StopCamera takes nothing returns nothing",
        description: "",
    
    },
    ResetToGameCamera: {
        completion: "native ResetToGameCamera takes real duration returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    PanCameraTo: {
        completion: "native PanCameraTo takes real x, real y returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    PanCameraToTimed: {
        completion: "native PanCameraToTimed takes real x, real y, real duration returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    PanCameraToWithZ: {
        completion: "native PanCameraToWithZ takes real x, real y, real zOffsetDest returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'zOffsetDest', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    PanCameraToTimedWithZ: {
        completion: "native PanCameraToTimedWithZ takes real x, real y, real zOffsetDest, real duration returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'zOffsetDest', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetCinematicCamera: {
        completion: "native SetCinematicCamera takes string cameraModelFile returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'cameraModelFile', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SetCameraRotateMode: {
        completion: "native SetCameraRotateMode takes real x, real y, real radiansToSweep, real duration returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'radiansToSweep', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetCameraField: {
        completion: "native SetCameraField takes camerafield whichField, real value, real duration returns nothing",
        description: "",
        parameters: [
            { label: 'camerafield', name: 'whichField', documentation: "" },
            { label: 'real', name: 'value', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    AdjustCameraField: {
        completion: "native AdjustCameraField takes camerafield whichField, real offset, real duration returns nothing",
        description: "",
        parameters: [
            { label: 'camerafield', name: 'whichField', documentation: "" },
            { label: 'real', name: 'offset', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetCameraTargetController: {
        completion: "native SetCameraTargetController takes unit whichUnit, real xoffset, real yoffset, boolean inheritOrientation returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'xoffset', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'yoffset', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'inheritOrientation', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetCameraOrientController: {
        completion: "native SetCameraOrientController takes unit whichUnit, real xoffset, real yoffset returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'xoffset', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'yoffset', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CreateCameraSetup: {
        completion: "native CreateCameraSetup takes nothing returns camerasetup",
        description: "",
    
    },
    CameraSetupSetField: {
        completion: "native CameraSetupSetField takes camerasetup whichSetup, camerafield whichField, real value, real duration returns nothing",
        description: "",
        parameters: [
            { label: 'camerasetup', name: 'whichSetup', documentation: "" },
            { label: 'camerafield', name: 'whichField', documentation: "" },
            { label: 'real', name: 'value', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CameraSetupGetField: {
        completion: "native CameraSetupGetField takes camerasetup whichSetup, camerafield whichField returns real",
        description: "",
        parameters: [
            { label: 'camerasetup', name: 'whichSetup', documentation: "" },
            { label: 'camerafield', name: 'whichField', documentation: "" },
      ],
    
    },
    CameraSetupSetDestPosition: {
        completion: "native CameraSetupSetDestPosition takes camerasetup whichSetup, real x, real y, real duration returns nothing",
        description: "",
        parameters: [
            { label: 'camerasetup', name: 'whichSetup', documentation: "" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CameraSetupGetDestPositionLoc: {
        completion: "native CameraSetupGetDestPositionLoc takes camerasetup whichSetup returns location",
        description: "",
        parameters: [
            { label: 'camerasetup', name: 'whichSetup', documentation: "" },
      ],
    
    },
    CameraSetupGetDestPositionX: {
        completion: "native CameraSetupGetDestPositionX takes camerasetup whichSetup returns real",
        description: "",
        parameters: [
            { label: 'camerasetup', name: 'whichSetup', documentation: "" },
      ],
    
    },
    CameraSetupGetDestPositionY: {
        completion: "native CameraSetupGetDestPositionY takes camerasetup whichSetup returns real",
        description: "",
        parameters: [
            { label: 'camerasetup', name: 'whichSetup', documentation: "" },
      ],
    
    },
    CameraSetupApply: {
        completion: "native CameraSetupApply takes camerasetup whichSetup, boolean doPan, boolean panTimed returns nothing",
        description: "",
        parameters: [
            { label: 'camerasetup', name: 'whichSetup', documentation: "" },
            { label: 'boolean', name: 'doPan', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'panTimed', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    CameraSetupApplyWithZ: {
        completion: "native CameraSetupApplyWithZ takes camerasetup whichSetup, real zDestOffset returns nothing",
        description: "",
        parameters: [
            { label: 'camerasetup', name: 'whichSetup', documentation: "" },
            { label: 'real', name: 'zDestOffset', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CameraSetupApplyForceDuration: {
        completion: "native CameraSetupApplyForceDuration takes camerasetup whichSetup, boolean doPan, real forceDuration returns nothing",
        description: "",
        parameters: [
            { label: 'camerasetup', name: 'whichSetup', documentation: "" },
            { label: 'boolean', name: 'doPan', documentation: "boolean variables can take the values true of false" },
            { label: 'real', name: 'forceDuration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CameraSetupApplyForceDurationWithZ: {
        completion: "native CameraSetupApplyForceDurationWithZ takes camerasetup whichSetup, real zDestOffset, real forceDuration returns nothing",
        description: "",
        parameters: [
            { label: 'camerasetup', name: 'whichSetup', documentation: "" },
            { label: 'real', name: 'zDestOffset', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'forceDuration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CameraSetTargetNoise: {
        completion: "native CameraSetTargetNoise takes real mag, real velocity returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'mag', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'velocity', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CameraSetSourceNoise: {
        completion: "native CameraSetSourceNoise takes real mag, real velocity returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'mag', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'velocity', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CameraSetTargetNoiseEx: {
        completion: "native CameraSetTargetNoiseEx takes real mag, real velocity, boolean vertOnly returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'mag', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'velocity', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'vertOnly', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    CameraSetSourceNoiseEx: {
        completion: "native CameraSetSourceNoiseEx takes real mag, real velocity, boolean vertOnly returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'mag', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'velocity', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'vertOnly', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    CameraSetSmoothingFactor: {
        completion: "native CameraSetSmoothingFactor takes real factor returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'factor', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetCineFilterTexture: {
        completion: "native SetCineFilterTexture takes string filename returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'filename', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SetCineFilterBlendMode: {
        completion: "native SetCineFilterBlendMode takes blendmode whichMode returns nothing",
        description: "",
        parameters: [
            { label: 'blendmode', name: 'whichMode', documentation: "" },
      ],
    
    },
    SetCineFilterTexMapFlags: {
        completion: "native SetCineFilterTexMapFlags takes texmapflags whichFlags returns nothing",
        description: "",
        parameters: [
            { label: 'texmapflags', name: 'whichFlags', documentation: "" },
      ],
    
    },
    SetCineFilterStartUV: {
        completion: "native SetCineFilterStartUV takes real minu, real minv, real maxu, real maxv returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'minu', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'minv', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'maxu', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'maxv', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetCineFilterEndUV: {
        completion: "native SetCineFilterEndUV takes real minu, real minv, real maxu, real maxv returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'minu', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'minv', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'maxu', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'maxv', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetCineFilterStartColor: {
        completion: "native SetCineFilterStartColor takes integer red, integer green, integer blue, integer alpha returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'red', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'green', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'blue', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'alpha', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetCineFilterEndColor: {
        completion: "native SetCineFilterEndColor takes integer red, integer green, integer blue, integer alpha returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'red', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'green', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'blue', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'alpha', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetCineFilterDuration: {
        completion: "native SetCineFilterDuration takes real duration returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    DisplayCineFilter: {
        completion: "native DisplayCineFilter takes boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    IsCineFilterDisplayed: {
        completion: "native IsCineFilterDisplayed takes nothing returns boolean",
        description: "",
    
    },
    SetCinematicScene: {
        completion: "native SetCinematicScene takes integer portraitUnitId, playercolor color, string speakerTitle, string text, real sceneDuration, real voiceoverDuration returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'portraitUnitId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'playercolor', name: 'color', documentation: "" },
            { label: 'string', name: 'speakerTitle', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'text', documentation: "strings variables hold a series of characters" },
            { label: 'real', name: 'sceneDuration', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'voiceoverDuration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    EndCinematicScene: {
        completion: "native EndCinematicScene takes nothing returns nothing",
        description: "",
    
    },
    ForceCinematicSubtitles: {
        completion: "native ForceCinematicSubtitles takes boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetCameraMargin: {
        completion: "native GetCameraMargin takes integer whichMargin returns real",
        description: "",
        parameters: [
            { label: 'integer', name: 'whichMargin', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetCameraBoundMinX: {
        completion: "constant native GetCameraBoundMinX takes nothing returns real",
        description: "",
    
    },
    GetCameraBoundMinY: {
        completion: "constant native GetCameraBoundMinY takes nothing returns real",
        description: "",
    
    },
    GetCameraBoundMaxX: {
        completion: "constant native GetCameraBoundMaxX takes nothing returns real",
        description: "",
    
    },
    GetCameraBoundMaxY: {
        completion: "constant native GetCameraBoundMaxY takes nothing returns real",
        description: "",
    
    },
    GetCameraField: {
        completion: "constant native GetCameraField takes camerafield whichField returns real",
        description: "",
        parameters: [
            { label: 'camerafield', name: 'whichField', documentation: "" },
      ],
    
    },
    GetCameraTargetPositionX: {
        completion: "constant native GetCameraTargetPositionX takes nothing returns real",
        description: "",
    
    },
    GetCameraTargetPositionY: {
        completion: "constant native GetCameraTargetPositionY takes nothing returns real",
        description: "",
    
    },
    GetCameraTargetPositionZ: {
        completion: "constant native GetCameraTargetPositionZ takes nothing returns real",
        description: "",
    
    },
    GetCameraTargetPositionLoc: {
        completion: "constant native GetCameraTargetPositionLoc takes nothing returns location",
        description: "",
    
    },
    GetCameraEyePositionX: {
        completion: "constant native GetCameraEyePositionX takes nothing returns real",
        description: "",
    
    },
    GetCameraEyePositionY: {
        completion: "constant native GetCameraEyePositionY takes nothing returns real",
        description: "",
    
    },
    GetCameraEyePositionZ: {
        completion: "constant native GetCameraEyePositionZ takes nothing returns real",
        description: "",
    
    },
    GetCameraEyePositionLoc: {
        completion: "constant native GetCameraEyePositionLoc takes nothing returns location",
        description: "",
    
    },
    NewSoundEnvironment: {
        completion: "native NewSoundEnvironment takes string environmentName returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'environmentName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    CreateSound: {
        completion: "native CreateSound takes string fileName, boolean looping, boolean is3D, boolean stopwhenoutofrange, integer fadeInRate, integer fadeOutRate, string eaxSetting returns sound",
        description: "",
        parameters: [
            { label: 'string', name: 'fileName', documentation: "strings variables hold a series of characters" },
            { label: 'boolean', name: 'looping', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'is3D', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'stopwhenoutofrange', documentation: "boolean variables can take the values true of false" },
            { label: 'integer', name: 'fadeInRate', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'fadeOutRate', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'string', name: 'eaxSetting', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    CreateSoundFilenameWithLabel: {
        completion: "native CreateSoundFilenameWithLabel takes string fileName, boolean looping, boolean is3D, boolean stopwhenoutofrange, integer fadeInRate, integer fadeOutRate, string SLKEntryName returns sound",
        description: "",
        parameters: [
            { label: 'string', name: 'fileName', documentation: "strings variables hold a series of characters" },
            { label: 'boolean', name: 'looping', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'is3D', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'stopwhenoutofrange', documentation: "boolean variables can take the values true of false" },
            { label: 'integer', name: 'fadeInRate', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'fadeOutRate', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'string', name: 'SLKEntryName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    CreateSoundFromLabel: {
        completion: "native CreateSoundFromLabel takes string soundLabel, boolean looping, boolean is3D, boolean stopwhenoutofrange, integer fadeInRate, integer fadeOutRate returns sound",
        description: "",
        parameters: [
            { label: 'string', name: 'soundLabel', documentation: "strings variables hold a series of characters" },
            { label: 'boolean', name: 'looping', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'is3D', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'stopwhenoutofrange', documentation: "boolean variables can take the values true of false" },
            { label: 'integer', name: 'fadeInRate', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'fadeOutRate', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    CreateMIDISound: {
        completion: "native CreateMIDISound takes string soundLabel, integer fadeInRate, integer fadeOutRate returns sound",
        description: "",
        parameters: [
            { label: 'string', name: 'soundLabel', documentation: "strings variables hold a series of characters" },
            { label: 'integer', name: 'fadeInRate', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'fadeOutRate', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetSoundParamsFromLabel: {
        completion: "native SetSoundParamsFromLabel takes sound soundHandle, string soundLabel returns nothing",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'string', name: 'soundLabel', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SetSoundDistanceCutoff: {
        completion: "native SetSoundDistanceCutoff takes sound soundHandle, real cutoff returns nothing",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'real', name: 'cutoff', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetSoundChannel: {
        completion: "native SetSoundChannel takes sound soundHandle, integer channel returns nothing",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'integer', name: 'channel', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetSoundVolume: {
        completion: "native SetSoundVolume takes sound soundHandle, integer volume returns nothing",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'integer', name: 'volume', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetSoundPitch: {
        completion: "native SetSoundPitch takes sound soundHandle, real pitch returns nothing",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'real', name: 'pitch', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetSoundPlayPosition: {
        completion: "native SetSoundPlayPosition takes sound soundHandle, integer millisecs returns nothing",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'integer', name: 'millisecs', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetSoundDistances: {
        completion: "native SetSoundDistances takes sound soundHandle, real minDist, real maxDist returns nothing",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'real', name: 'minDist', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'maxDist', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetSoundConeAngles: {
        completion: "native SetSoundConeAngles takes sound soundHandle, real inside, real outside, integer outsideVolume returns nothing",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'real', name: 'inside', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'outside', documentation: "real variables can hold rational numbers" },
            { label: 'integer', name: 'outsideVolume', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetSoundConeOrientation: {
        completion: "native SetSoundConeOrientation takes sound soundHandle, real x, real y, real z returns nothing",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'z', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetSoundPosition: {
        completion: "native SetSoundPosition takes sound soundHandle, real x, real y, real z returns nothing",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'z', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetSoundVelocity: {
        completion: "native SetSoundVelocity takes sound soundHandle, real x, real y, real z returns nothing",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'z', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    AttachSoundToUnit: {
        completion: "native AttachSoundToUnit takes sound soundHandle, unit whichUnit returns nothing",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    StartSound: {
        completion: "native StartSound takes sound soundHandle returns nothing",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
      ],
    
    },
    StopSound: {
        completion: "native StopSound takes sound soundHandle, boolean killWhenDone, boolean fadeOut returns nothing",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'boolean', name: 'killWhenDone', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'fadeOut', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    KillSoundWhenDone: {
        completion: "native KillSoundWhenDone takes sound soundHandle returns nothing",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
      ],
    
    },
    SetMapMusic: {
        completion: "native SetMapMusic takes string musicName, boolean random, integer index returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'musicName', documentation: "strings variables hold a series of characters" },
            { label: 'boolean', name: 'random', documentation: "boolean variables can take the values true of false" },
            { label: 'integer', name: 'index', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ClearMapMusic: {
        completion: "native ClearMapMusic takes nothing returns nothing",
        description: "",
    
    },
    PlayMusic: {
        completion: "native PlayMusic takes string musicName returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'musicName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    PlayMusicEx: {
        completion: "native PlayMusicEx takes string musicName, integer frommsecs, integer fadeinmsecs returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'musicName', documentation: "strings variables hold a series of characters" },
            { label: 'integer', name: 'frommsecs', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'fadeinmsecs', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    StopMusic: {
        completion: "native StopMusic takes boolean fadeOut returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'fadeOut', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    ResumeMusic: {
        completion: "native ResumeMusic takes nothing returns nothing",
        description: "",
    
    },
    PlayThematicMusic: {
        completion: "native PlayThematicMusic takes string musicFileName returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'musicFileName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    PlayThematicMusicEx: {
        completion: "native PlayThematicMusicEx takes string musicFileName, integer frommsecs returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'musicFileName', documentation: "strings variables hold a series of characters" },
            { label: 'integer', name: 'frommsecs', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    EndThematicMusic: {
        completion: "native EndThematicMusic takes nothing returns nothing",
        description: "",
    
    },
    SetMusicVolume: {
        completion: "native SetMusicVolume takes integer volume returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'volume', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetMusicPlayPosition: {
        completion: "native SetMusicPlayPosition takes integer millisecs returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'millisecs', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetThematicMusicPlayPosition: {
        completion: "native SetThematicMusicPlayPosition takes integer millisecs returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'millisecs', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetSoundDuration: {
        completion: "native SetSoundDuration takes sound soundHandle, integer duration returns nothing",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'integer', name: 'duration', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetSoundDuration: {
        completion: "native GetSoundDuration takes sound soundHandle returns integer",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
      ],
    
    },
    GetSoundFileDuration: {
        completion: "native GetSoundFileDuration takes string musicFileName returns integer",
        description: "",
        parameters: [
            { label: 'string', name: 'musicFileName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    VolumeGroupSetVolume: {
        completion: "native VolumeGroupSetVolume takes volumegroup vgroup, real scale returns nothing",
        description: "",
        parameters: [
            { label: 'volumegroup', name: 'vgroup', documentation: "" },
            { label: 'real', name: 'scale', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    VolumeGroupReset: {
        completion: "native VolumeGroupReset takes nothing returns nothing",
        description: "",
    
    },
    GetSoundIsPlaying: {
        completion: "native GetSoundIsPlaying takes sound soundHandle returns boolean",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
      ],
    
    },
    GetSoundIsLoading: {
        completion: "native GetSoundIsLoading takes sound soundHandle returns boolean",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
      ],
    
    },
    RegisterStackedSound: {
        completion: "native RegisterStackedSound takes sound soundHandle, boolean byPosition, real rectwidth, real rectheight returns nothing",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'boolean', name: 'byPosition', documentation: "boolean variables can take the values true of false" },
            { label: 'real', name: 'rectwidth', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'rectheight', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    UnregisterStackedSound: {
        completion: "native UnregisterStackedSound takes sound soundHandle, boolean byPosition, real rectwidth, real rectheight returns nothing",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'boolean', name: 'byPosition', documentation: "boolean variables can take the values true of false" },
            { label: 'real', name: 'rectwidth', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'rectheight', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    AddWeatherEffect: {
        completion: "native AddWeatherEffect takes rect where, integer effectID returns weathereffect",
        description: "",
        parameters: [
            { label: 'rect', name: 'where', documentation: "" },
            { label: 'integer', name: 'effectID', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    RemoveWeatherEffect: {
        completion: "native RemoveWeatherEffect takes weathereffect whichEffect returns nothing",
        description: "",
        parameters: [
            { label: 'weathereffect', name: 'whichEffect', documentation: "" },
      ],
    
    },
    EnableWeatherEffect: {
        completion: "native EnableWeatherEffect takes weathereffect whichEffect, boolean enable returns nothing",
        description: "",
        parameters: [
            { label: 'weathereffect', name: 'whichEffect', documentation: "" },
            { label: 'boolean', name: 'enable', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    TerrainDeformCrater: {
        completion: "native TerrainDeformCrater takes real x, real y, real radius, real depth, integer duration, boolean permanent returns terraindeformation",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'depth', documentation: "real variables can hold rational numbers" },
            { label: 'integer', name: 'duration', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'permanent', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    TerrainDeformRipple: {
        completion: "native TerrainDeformRipple takes real x, real y, real radius, real depth, integer duration, integer count, real spaceWaves, real timeWaves, real radiusStartPct, boolean limitNeg returns terraindeformation",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'depth', documentation: "real variables can hold rational numbers" },
            { label: 'integer', name: 'duration', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'count', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'spaceWaves', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'timeWaves', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'radiusStartPct', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'limitNeg', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    TerrainDeformWave: {
        completion: "native TerrainDeformWave takes real x, real y, real dirX, real dirY, real distance, real speed, real radius, real depth, integer trailTime, integer count returns terraindeformation",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'dirX', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'dirY', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'distance', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'speed', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'depth', documentation: "real variables can hold rational numbers" },
            { label: 'integer', name: 'trailTime', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'count', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    TerrainDeformRandom: {
        completion: "native TerrainDeformRandom takes real x, real y, real radius, real minDelta, real maxDelta, integer duration, integer updateInterval returns terraindeformation",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'minDelta', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'maxDelta', documentation: "real variables can hold rational numbers" },
            { label: 'integer', name: 'duration', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'updateInterval', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    TerrainDeformStop: {
        completion: "native TerrainDeformStop takes terraindeformation deformation, integer duration returns nothing",
        description: "",
        parameters: [
            { label: 'terraindeformation', name: 'deformation', documentation: "" },
            { label: 'integer', name: 'duration', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    TerrainDeformStopAll: {
        completion: "native TerrainDeformStopAll takes nothing returns nothing",
        description: "",
    
    },
    AddSpecialEffect: {
        completion: "native AddSpecialEffect takes string modelName, real x, real y returns effect",
        description: "",
        parameters: [
            { label: 'string', name: 'modelName', documentation: "strings variables hold a series of characters" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    AddSpecialEffectLoc: {
        completion: "native AddSpecialEffectLoc takes string modelName, location where returns effect",
        description: "",
        parameters: [
            { label: 'string', name: 'modelName', documentation: "strings variables hold a series of characters" },
            { label: 'location', name: 'where', documentation: "" },
      ],
    
    },
    AddSpecialEffectTarget: {
        completion: "native AddSpecialEffectTarget takes string modelName, widget targetWidget, string attachPointName returns effect",
        description: "",
        parameters: [
            { label: 'string', name: 'modelName', documentation: "strings variables hold a series of characters" },
            { label: 'widget', name: 'targetWidget', documentation: "an interactive game object with life" },
            { label: 'string', name: 'attachPointName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    DestroyEffect: {
        completion: "native DestroyEffect takes effect whichEffect returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
      ],
    
    },
    AddSpellEffect: {
        completion: "native AddSpellEffect takes string abilityString, effecttype t, real x, real y returns effect",
        description: "",
        parameters: [
            { label: 'string', name: 'abilityString', documentation: "strings variables hold a series of characters" },
            { label: 'effecttype', name: 't', documentation: "" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    AddSpellEffectLoc: {
        completion: "native AddSpellEffectLoc takes string abilityString, effecttype t,location where returns effect",
        description: "",
        parameters: [
            { label: 'string', name: 'abilityString', documentation: "strings variables hold a series of characters" },
            { label: 'effecttype', name: 't', documentation: "" },
            { label: 'location', name: 'where', documentation: "" },
      ],
    
    },
    AddSpellEffectById: {
        completion: "native AddSpellEffectById takes integer abilityId, effecttype t,real x, real y returns effect",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilityId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'effecttype', name: 't', documentation: "" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    AddSpellEffectByIdLoc: {
        completion: "native AddSpellEffectByIdLoc takes integer abilityId, effecttype t,location where returns effect",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilityId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'effecttype', name: 't', documentation: "" },
            { label: 'location', name: 'where', documentation: "" },
      ],
    
    },
    AddSpellEffectTarget: {
        completion: "native AddSpellEffectTarget takes string modelName, effecttype t, widget targetWidget, string attachPoint returns effect",
        description: "",
        parameters: [
            { label: 'string', name: 'modelName', documentation: "strings variables hold a series of characters" },
            { label: 'effecttype', name: 't', documentation: "" },
            { label: 'widget', name: 'targetWidget', documentation: "an interactive game object with life" },
            { label: 'string', name: 'attachPoint', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    AddSpellEffectTargetById: {
        completion: "native AddSpellEffectTargetById takes integer abilityId, effecttype t, widget targetWidget, string attachPoint returns effect",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilityId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'effecttype', name: 't', documentation: "" },
            { label: 'widget', name: 'targetWidget', documentation: "an interactive game object with life" },
            { label: 'string', name: 'attachPoint', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    AddLightning: {
        completion: "native AddLightning takes string codeName, boolean checkVisibility, real x1, real y1, real x2, real y2 returns lightning",
        description: "",
        parameters: [
            { label: 'string', name: 'codeName', documentation: "strings variables hold a series of characters" },
            { label: 'boolean', name: 'checkVisibility', documentation: "boolean variables can take the values true of false" },
            { label: 'real', name: 'x1', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y1', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'x2', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y2', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    AddLightningEx: {
        completion: "native AddLightningEx takes string codeName, boolean checkVisibility, real x1, real y1, real z1, real x2, real y2, real z2 returns lightning",
        description: "",
        parameters: [
            { label: 'string', name: 'codeName', documentation: "strings variables hold a series of characters" },
            { label: 'boolean', name: 'checkVisibility', documentation: "boolean variables can take the values true of false" },
            { label: 'real', name: 'x1', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y1', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'z1', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'x2', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y2', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'z2', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    DestroyLightning: {
        completion: "native DestroyLightning takes lightning whichBolt returns boolean",
        description: "",
        parameters: [
            { label: 'lightning', name: 'whichBolt', documentation: "" },
      ],
    
    },
    MoveLightning: {
        completion: "native MoveLightning takes lightning whichBolt, boolean checkVisibility, real x1, real y1, real x2, real y2 returns boolean",
        description: "",
        parameters: [
            { label: 'lightning', name: 'whichBolt', documentation: "" },
            { label: 'boolean', name: 'checkVisibility', documentation: "boolean variables can take the values true of false" },
            { label: 'real', name: 'x1', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y1', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'x2', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y2', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    MoveLightningEx: {
        completion: "native MoveLightningEx takes lightning whichBolt, boolean checkVisibility, real x1, real y1, real z1, real x2, real y2, real z2 returns boolean",
        description: "",
        parameters: [
            { label: 'lightning', name: 'whichBolt', documentation: "" },
            { label: 'boolean', name: 'checkVisibility', documentation: "boolean variables can take the values true of false" },
            { label: 'real', name: 'x1', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y1', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'z1', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'x2', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y2', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'z2', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetLightningColorA: {
        completion: "native GetLightningColorA takes lightning whichBolt returns real",
        description: "",
        parameters: [
            { label: 'lightning', name: 'whichBolt', documentation: "" },
      ],
    
    },
    GetLightningColorR: {
        completion: "native GetLightningColorR takes lightning whichBolt returns real",
        description: "",
        parameters: [
            { label: 'lightning', name: 'whichBolt', documentation: "" },
      ],
    
    },
    GetLightningColorG: {
        completion: "native GetLightningColorG takes lightning whichBolt returns real",
        description: "",
        parameters: [
            { label: 'lightning', name: 'whichBolt', documentation: "" },
      ],
    
    },
    GetLightningColorB: {
        completion: "native GetLightningColorB takes lightning whichBolt returns real",
        description: "",
        parameters: [
            { label: 'lightning', name: 'whichBolt', documentation: "" },
      ],
    
    },
    SetLightningColor: {
        completion: "native SetLightningColor takes lightning whichBolt, real r, real g, real b, real a returns boolean",
        description: "",
        parameters: [
            { label: 'lightning', name: 'whichBolt', documentation: "" },
            { label: 'real', name: 'r', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'g', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'b', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'a', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetAbilityEffect: {
        completion: "native GetAbilityEffect takes string abilityString, effecttype t, integer index returns string",
        description: "",
        parameters: [
            { label: 'string', name: 'abilityString', documentation: "strings variables hold a series of characters" },
            { label: 'effecttype', name: 't', documentation: "" },
            { label: 'integer', name: 'index', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetAbilityEffectById: {
        completion: "native GetAbilityEffectById takes integer abilityId, effecttype t, integer index returns string",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilityId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'effecttype', name: 't', documentation: "" },
            { label: 'integer', name: 'index', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetAbilitySound: {
        completion: "native GetAbilitySound takes string abilityString, soundtype t returns string",
        description: "",
        parameters: [
            { label: 'string', name: 'abilityString', documentation: "strings variables hold a series of characters" },
            { label: 'soundtype', name: 't', documentation: "" },
      ],
    
    },
    GetAbilitySoundById: {
        completion: "native GetAbilitySoundById takes integer abilityId, soundtype t returns string",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilityId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'soundtype', name: 't', documentation: "" },
      ],
    
    },
    GetTerrainCliffLevel: {
        completion: "native GetTerrainCliffLevel takes real x, real y returns integer",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetWaterBaseColor: {
        completion: "native SetWaterBaseColor takes integer red, integer green, integer blue, integer alpha returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'red', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'green', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'blue', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'alpha', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetWaterDeforms: {
        completion: "native SetWaterDeforms takes boolean val returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'val', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetTerrainType: {
        completion: "native GetTerrainType takes real x, real y returns integer",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetTerrainVariance: {
        completion: "native GetTerrainVariance takes real x, real y returns integer",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetTerrainType: {
        completion: "native SetTerrainType takes real x, real y, integer terrainType, integer variation, integer area, integer shape returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'integer', name: 'terrainType', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'variation', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'area', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'shape', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    IsTerrainPathable: {
        completion: "native IsTerrainPathable takes real x, real y, pathingtype t returns boolean",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'pathingtype', name: 't', documentation: "" },
      ],
    
    },
    SetTerrainPathable: {
        completion: "native SetTerrainPathable takes real x, real y, pathingtype t, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'pathingtype', name: 't', documentation: "" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    CreateImage: {
        completion: "native CreateImage takes string file, real sizeX, real sizeY, real sizeZ, real posX, real posY, real posZ, real originX, real originY, real originZ, integer imageType returns image",
        description: "",
        parameters: [
            { label: 'string', name: 'file', documentation: "strings variables hold a series of characters" },
            { label: 'real', name: 'sizeX', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'sizeY', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'sizeZ', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'posX', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'posY', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'posZ', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'originX', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'originY', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'originZ', documentation: "real variables can hold rational numbers" },
            { label: 'integer', name: 'imageType', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    DestroyImage: {
        completion: "native DestroyImage takes image whichImage returns nothing",
        description: "",
        parameters: [
            { label: 'image', name: 'whichImage', documentation: "" },
      ],
    
    },
    ShowImage: {
        completion: "native ShowImage takes image whichImage, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'image', name: 'whichImage', documentation: "" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetImageConstantHeight: {
        completion: "native SetImageConstantHeight takes image whichImage, boolean flag, real height returns nothing",
        description: "",
        parameters: [
            { label: 'image', name: 'whichImage', documentation: "" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
            { label: 'real', name: 'height', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetImagePosition: {
        completion: "native SetImagePosition takes image whichImage, real x, real y, real z returns nothing",
        description: "",
        parameters: [
            { label: 'image', name: 'whichImage', documentation: "" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'z', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetImageColor: {
        completion: "native SetImageColor takes image whichImage, integer red, integer green, integer blue, integer alpha returns nothing",
        description: "",
        parameters: [
            { label: 'image', name: 'whichImage', documentation: "" },
            { label: 'integer', name: 'red', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'green', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'blue', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'alpha', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetImageRender: {
        completion: "native SetImageRender takes image whichImage, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'image', name: 'whichImage', documentation: "" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetImageRenderAlways: {
        completion: "native SetImageRenderAlways takes image whichImage, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'image', name: 'whichImage', documentation: "" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetImageAboveWater: {
        completion: "native SetImageAboveWater takes image whichImage, boolean flag, boolean useWaterAlpha returns nothing",
        description: "",
        parameters: [
            { label: 'image', name: 'whichImage', documentation: "" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'useWaterAlpha', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetImageType: {
        completion: "native SetImageType takes image whichImage, integer imageType returns nothing",
        description: "",
        parameters: [
            { label: 'image', name: 'whichImage', documentation: "" },
            { label: 'integer', name: 'imageType', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    CreateUbersplat: {
        completion: "native CreateUbersplat takes real x, real y, string name, integer red, integer green, integer blue, integer alpha, boolean forcePaused, boolean noBirthTime returns ubersplat",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'string', name: 'name', documentation: "strings variables hold a series of characters" },
            { label: 'integer', name: 'red', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'green', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'blue', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'alpha', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'forcePaused', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'noBirthTime', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    DestroyUbersplat: {
        completion: "native DestroyUbersplat takes ubersplat whichSplat returns nothing",
        description: "",
        parameters: [
            { label: 'ubersplat', name: 'whichSplat', documentation: "" },
      ],
    
    },
    ResetUbersplat: {
        completion: "native ResetUbersplat takes ubersplat whichSplat returns nothing",
        description: "",
        parameters: [
            { label: 'ubersplat', name: 'whichSplat', documentation: "" },
      ],
    
    },
    FinishUbersplat: {
        completion: "native FinishUbersplat takes ubersplat whichSplat returns nothing",
        description: "",
        parameters: [
            { label: 'ubersplat', name: 'whichSplat', documentation: "" },
      ],
    
    },
    ShowUbersplat: {
        completion: "native ShowUbersplat takes ubersplat whichSplat, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'ubersplat', name: 'whichSplat', documentation: "" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetUbersplatRender: {
        completion: "native SetUbersplatRender takes ubersplat whichSplat, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'ubersplat', name: 'whichSplat', documentation: "" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetUbersplatRenderAlways: {
        completion: "native SetUbersplatRenderAlways takes ubersplat whichSplat, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'ubersplat', name: 'whichSplat', documentation: "" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetBlight: {
        completion: "native SetBlight takes player whichPlayer, real x, real y, real radius, boolean addBlight returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'addBlight', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetBlightRect: {
        completion: "native SetBlightRect takes player whichPlayer, rect r, boolean addBlight returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'rect', name: 'r', documentation: "" },
            { label: 'boolean', name: 'addBlight', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetBlightPoint: {
        completion: "native SetBlightPoint takes player whichPlayer, real x, real y, boolean addBlight returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'addBlight', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetBlightLoc: {
        completion: "native SetBlightLoc takes player whichPlayer, location whichLocation, real radius, boolean addBlight returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'location', name: 'whichLocation', documentation: "" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'addBlight', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    CreateBlightedGoldmine: {
        completion: "native CreateBlightedGoldmine takes player id, real x, real y, real face returns unit",
        description: "",
        parameters: [
            { label: 'player', name: 'id', documentation: "a single player reference" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'face', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    IsPointBlighted: {
        completion: "native IsPointBlighted takes real x, real y returns boolean",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetDoodadAnimation: {
        completion: "native SetDoodadAnimation takes real x, real y, real radius, integer doodadID, boolean nearestOnly, string animName, boolean animRandom returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'integer', name: 'doodadID', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'nearestOnly', documentation: "boolean variables can take the values true of false" },
            { label: 'string', name: 'animName', documentation: "strings variables hold a series of characters" },
            { label: 'boolean', name: 'animRandom', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetDoodadAnimationRect: {
        completion: "native SetDoodadAnimationRect takes rect r, integer doodadID, string animName, boolean animRandom returns nothing",
        description: "",
        parameters: [
            { label: 'rect', name: 'r', documentation: "" },
            { label: 'integer', name: 'doodadID', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'string', name: 'animName', documentation: "strings variables hold a series of characters" },
            { label: 'boolean', name: 'animRandom', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    StartMeleeAI: {
        completion: "native StartMeleeAI takes player num, string script returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'num', documentation: "a single player reference" },
            { label: 'string', name: 'script', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    StartCampaignAI: {
        completion: "native StartCampaignAI takes player num, string script returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'num', documentation: "a single player reference" },
            { label: 'string', name: 'script', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    CommandAI: {
        completion: "native CommandAI takes player num, integer command, integer data returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'num', documentation: "a single player reference" },
            { label: 'integer', name: 'command', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'data', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    PauseCompAI: {
        completion: "native PauseCompAI takes player p, boolean pause returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'p', documentation: "a single player reference" },
            { label: 'boolean', name: 'pause', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetAIDifficulty: {
        completion: "native GetAIDifficulty takes player num returns aidifficulty",
        description: "",
        parameters: [
            { label: 'player', name: 'num', documentation: "a single player reference" },
      ],
    
    },
    RemoveGuardPosition: {
        completion: "native RemoveGuardPosition takes unit hUnit returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'hUnit', documentation: "a single unit reference" },
      ],
    
    },
    RecycleGuardPosition: {
        completion: "native RecycleGuardPosition takes unit hUnit returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'hUnit', documentation: "a single unit reference" },
      ],
    
    },
    RemoveAllGuardPositions: {
        completion: "native RemoveAllGuardPositions takes player num returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'num', documentation: "a single player reference" },
      ],
    
    },
    Cheat: {
        completion: "native Cheat takes string cheatStr returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'cheatStr', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    IsNoVictoryCheat: {
        completion: "native IsNoVictoryCheat takes nothing returns boolean",
        description: "",
    
    },
    IsNoDefeatCheat: {
        completion: "native IsNoDefeatCheat takes nothing returns boolean",
        description: "",
    
    },
    Preload: {
        completion: "native Preload takes string filename returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'filename', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    PreloadEnd: {
        completion: "native PreloadEnd takes real timeout returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'timeout', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    PreloadStart: {
        completion: "native PreloadStart takes nothing returns nothing",
        description: "",
    
    },
    PreloadRefresh: {
        completion: "native PreloadRefresh takes nothing returns nothing",
        description: "",
    
    },
    PreloadEndEx: {
        completion: "native PreloadEndEx takes nothing returns nothing",
        description: "",
    
    },
    PreloadGenClear: {
        completion: "native PreloadGenClear takes nothing returns nothing",
        description: "",
    
    },
    PreloadGenStart: {
        completion: "native PreloadGenStart takes nothing returns nothing",
        description: "",
    
    },
    PreloadGenEnd: {
        completion: "native PreloadGenEnd takes string filename returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'filename', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    Preloader: {
        completion: "native Preloader takes string filename returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'filename', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    FlushChildHashtable: {
        completion: "native FlushChildHashtable takes hashtable table, integer parentKey returns nothing",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    FlushParentHashtable: {
        completion: "native FlushParentHashtable takes hashtable table returns nothing",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
      ],
    
    },
    GetHandleId: {
        completion: "native GetHandleId takes handle h returns integer",
        description: "",
        parameters: [
            { label: 'handle', name: 'h', documentation: "a handle variable is basically a pointer. It refers to some data structure that is internal to Warcraft III which you can not manipulate directly" },
      ],
    
    },
    GetTriggerDestructable: {
        completion: "constant native GetTriggerDestructable takes nothing returns destructable",
        description: "",
    
    },
    HaveSavedBoolean: {
        completion: "native HaveSavedBoolean takes hashtable table, integer parentKey, integer childKey returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    HaveSavedHandle: {
        completion: "native HaveSavedHandle takes hashtable table, integer parentKey, integer childKey returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    HaveSavedInteger: {
        completion: "native HaveSavedInteger takes hashtable table, integer parentKey, integer childKey returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    HaveSavedReal: {
        completion: "native HaveSavedReal takes hashtable table, integer parentKey, integer childKey returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    HaveSavedString: {
        completion: "native HaveSavedString takes hashtable table, integer parentKey, integer childKey returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    InitHashtable: {
        completion: "native InitHashtable takes nothing returns hashtable",
        description: "",
    
    },
    LoadAbilityHandle: {
        completion: "native LoadAbilityHandle takes hashtable table, integer parentKey, integer childKey returns ability",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadBoolean: {
        completion: "native LoadBoolean takes hashtable table, integer parentKey, integer childKey returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadBooleanExprHandle: {
        completion: "native LoadBooleanExprHandle takes hashtable table, integer parentKey, integer childKey returns boolexpr",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadButtonHandle: {
        completion: "native LoadButtonHandle takes hashtable table, integer parentKey, integer childKey returns button",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadDefeatConditionHandle: {
        completion: "native LoadDefeatConditionHandle takes hashtable table, integer parentKey, integer childKey returns defeatcondition",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadDestructableHandle: {
        completion: "native LoadDestructableHandle takes hashtable table, integer parentKey, integer childKey returns destructable",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadDialogHandle: {
        completion: "native LoadDialogHandle takes hashtable table, integer parentKey, integer childKey returns dialog",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadEffectHandle: {
        completion: "native LoadEffectHandle takes hashtable table, integer parentKey, integer childKey returns effect",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadFogModifierHandle: {
        completion: "native LoadFogModifierHandle takes hashtable table, integer parentKey, integer childKey returns fogmodifier",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadFogStateHandle: {
        completion: "native LoadFogStateHandle takes hashtable table, integer parentKey, integer childKey returns fogstate",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadForceHandle: {
        completion: "native LoadForceHandle takes hashtable table, integer parentKey, integer childKey returns force",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadGroupHandle: {
        completion: "native LoadGroupHandle takes hashtable table, integer parentKey, integer childKey returns group",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadImageHandle: {
        completion: "native LoadImageHandle takes hashtable table, integer parentKey, integer childKey returns image",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadInteger: {
        completion: "native LoadInteger takes hashtable table, integer parentKey, integer childKey returns integer",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadItemHandle: {
        completion: "native LoadItemHandle takes hashtable table, integer parentKey, integer childKey returns item",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadItemPoolHandle: {
        completion: "native LoadItemPoolHandle takes hashtable table, integer parentKey, integer childKey returns itempool",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadLeaderboardHandle: {
        completion: "native LoadLeaderboardHandle takes hashtable table, integer parentKey, integer childKey returns leaderboard",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadLightningHandle: {
        completion: "native LoadLightningHandle takes hashtable table, integer parentKey, integer childKey returns lightning",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadLocationHandle: {
        completion: "native LoadLocationHandle takes hashtable table, integer parentKey, integer childKey returns location",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadMultiboardHandle: {
        completion: "native LoadMultiboardHandle takes hashtable table, integer parentKey, integer childKey returns multiboard",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadMultiboardItemHandle: {
        completion: "native LoadMultiboardItemHandle takes hashtable table, integer parentKey, integer childKey returns multiboarditem",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadPlayerHandle: {
        completion: "native LoadPlayerHandle takes hashtable table, integer parentKey, integer childKey returns player",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadQuestHandle: {
        completion: "native LoadQuestHandle takes hashtable table, integer parentKey, integer childKey returns quest",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadQuestItemHandle: {
        completion: "native LoadQuestItemHandle takes hashtable table, integer parentKey, integer childKey returns questitem",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadReal: {
        completion: "native LoadReal takes hashtable table, integer parentKey, integer childKey returns real",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadRectHandle: {
        completion: "native LoadRectHandle takes hashtable table, integer parentKey, integer childKey returns rect",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadRegionHandle: {
        completion: "native LoadRegionHandle takes hashtable table, integer parentKey, integer childKey returns region",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadSoundHandle: {
        completion: "native LoadSoundHandle takes hashtable table, integer parentKey, integer childKey returns sound",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadStr: {
        completion: "native LoadStr takes hashtable table, integer parentKey, integer childKey returns string",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadTextTagHandle: {
        completion: "native LoadTextTagHandle takes hashtable table, integer parentKey, integer childKey returns texttag",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadTimerDialogHandle: {
        completion: "native LoadTimerDialogHandle takes hashtable table, integer parentKey, integer childKey returns timerdialog",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadTimerHandle: {
        completion: "native LoadTimerHandle takes hashtable table, integer parentKey, integer childKey returns timer",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadTrackableHandle: {
        completion: "native LoadTrackableHandle takes hashtable table, integer parentKey, integer childKey returns trackable",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadTriggerActionHandle: {
        completion: "native LoadTriggerActionHandle takes hashtable table, integer parentKey, integer childKey returns triggeraction",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadTriggerConditionHandle: {
        completion: "native LoadTriggerConditionHandle takes hashtable table, integer parentKey, integer childKey returns triggercondition",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadTriggerEventHandle: {
        completion: "native LoadTriggerEventHandle takes hashtable table, integer parentKey, integer childKey returns event",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadTriggerHandle: {
        completion: "native LoadTriggerHandle takes hashtable table, integer parentKey, integer childKey returns trigger",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadUbersplatHandle: {
        completion: "native LoadUbersplatHandle takes hashtable table, integer parentKey, integer childKey returns ubersplat",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadUnitHandle: {
        completion: "native LoadUnitHandle takes hashtable table, integer parentKey, integer childKey returns unit",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadUnitPoolHandle: {
        completion: "native LoadUnitPoolHandle takes hashtable table, integer parentKey, integer childKey returns unitpool",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    LoadWidgetHandle: {
        completion: "native LoadWidgetHandle takes hashtable table, integer parentKey, integer childKey returns widget",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    RemoveSavedBoolean: {
        completion: "native RemoveSavedBoolean takes hashtable table, integer parentKey, integer childKey returns nothing",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    RemoveSavedHandle: {
        completion: "native RemoveSavedHandle takes hashtable table, integer parentKey, integer childKey returns nothing",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    RemoveSavedInteger: {
        completion: "native RemoveSavedInteger takes hashtable table, integer parentKey, integer childKey returns nothing",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    RemoveSavedReal: {
        completion: "native RemoveSavedReal takes hashtable table, integer parentKey, integer childKey returns nothing",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    RemoveSavedString: {
        completion: "native RemoveSavedString takes hashtable table, integer parentKey, integer childKey returns nothing",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SaveAbilityHandle: {
        completion: "native SaveAbilityHandle takes hashtable table, integer parentKey, integer childKey, ability whichAbility returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'ability', name: 'whichAbility', documentation: "" },
      ],
    
    },
    SaveBoolean: {
        completion: "native SaveBoolean takes hashtable table, integer parentKey, integer childKey, boolean value returns nothing",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'value', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SaveBooleanExprHandle: {
        completion: "native SaveBooleanExprHandle takes hashtable table, integer parentKey, integer childKey, boolexpr whichBoolexpr returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolexpr', name: 'whichBoolexpr', documentation: "" },
      ],
    
    },
    SaveButtonHandle: {
        completion: "native SaveButtonHandle takes hashtable table, integer parentKey, integer childKey, button whichButton returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'button', name: 'whichButton', documentation: "" },
      ],
    
    },
    SaveDefeatConditionHandle: {
        completion: "native SaveDefeatConditionHandle takes hashtable table, integer parentKey, integer childKey, defeatcondition whichDefeatcondition returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'defeatcondition', name: 'whichDefeatcondition', documentation: "" },
      ],
    
    },
    SaveDestructableHandle: {
        completion: "native SaveDestructableHandle takes hashtable table, integer parentKey, integer childKey, destructable whichDestructable returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'destructable', name: 'whichDestructable', documentation: "a single destructable reference" },
      ],
    
    },
    SaveDialogHandle: {
        completion: "native SaveDialogHandle takes hashtable table, integer parentKey, integer childKey, dialog whichDialog returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'dialog', name: 'whichDialog', documentation: "" },
      ],
    
    },
    SaveEffectHandle: {
        completion: "native SaveEffectHandle takes hashtable table, integer parentKey, integer childKey, effect whichEffect returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'effect', name: 'whichEffect', documentation: "" },
      ],
    
    },
    SaveFogModifierHandle: {
        completion: "native SaveFogModifierHandle takes hashtable table, integer parentKey, integer childKey, fogmodifier whichFogModifier returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'fogmodifier', name: 'whichFogModifier', documentation: "" },
      ],
    
    },
    SaveFogStateHandle: {
        completion: "native SaveFogStateHandle takes hashtable table, integer parentKey, integer childKey, fogstate whichFogState returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'fogstate', name: 'whichFogState', documentation: "" },
      ],
    
    },
    SaveForceHandle: {
        completion: "native SaveForceHandle takes hashtable table, integer parentKey, integer childKey, force whichForce returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'force', name: 'whichForce', documentation: "a collection of players" },
      ],
    
    },
    SaveGroupHandle: {
        completion: "native SaveGroupHandle takes hashtable table, integer parentKey, integer childKey, group whichGroup returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'group', name: 'whichGroup', documentation: "a collection of units" },
      ],
    
    },
    SaveImageHandle: {
        completion: "native SaveImageHandle takes hashtable table, integer parentKey, integer childKey, image whichImage returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'image', name: 'whichImage', documentation: "" },
      ],
    
    },
    SaveInteger: {
        completion: "native SaveInteger takes hashtable table, integer parentKey, integer childKey, integer value returns nothing",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'value', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SaveItemHandle: {
        completion: "native SaveItemHandle takes hashtable table, integer parentKey, integer childKey, item whichItem returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],
    
    },
    SaveItemPoolHandle: {
        completion: "native SaveItemPoolHandle takes hashtable table, integer parentKey, integer childKey, itempool whichItempool returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'itempool', name: 'whichItempool', documentation: "" },
      ],
    
    },
    SaveLeaderboardHandle: {
        completion: "native SaveLeaderboardHandle takes hashtable table, integer parentKey, integer childKey, leaderboard whichLeaderboard returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'leaderboard', name: 'whichLeaderboard', documentation: "" },
      ],
    
    },
    SaveLightningHandle: {
        completion: "native SaveLightningHandle takes hashtable table, integer parentKey, integer childKey, lightning whichLightning returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'lightning', name: 'whichLightning', documentation: "" },
      ],
    
    },
    SaveLocationHandle: {
        completion: "native SaveLocationHandle takes hashtable table, integer parentKey, integer childKey, location whichLocation returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'location', name: 'whichLocation', documentation: "" },
      ],
    
    },
    SaveMultiboardHandle: {
        completion: "native SaveMultiboardHandle takes hashtable table, integer parentKey, integer childKey, multiboard whichMultiboard returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'multiboard', name: 'whichMultiboard', documentation: "" },
      ],
    
    },
    SaveMultiboardItemHandle: {
        completion: "native SaveMultiboardItemHandle takes hashtable table, integer parentKey, integer childKey, multiboarditem whichMultiboarditem returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'multiboarditem', name: 'whichMultiboarditem', documentation: "" },
      ],
    
    },
    SavePlayerHandle: {
        completion: "native SavePlayerHandle takes hashtable table, integer parentKey, integer childKey, player whichPlayer returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    SaveQuestHandle: {
        completion: "native SaveQuestHandle takes hashtable table, integer parentKey, integer childKey, quest whichQuest returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'quest', name: 'whichQuest', documentation: "" },
      ],
    
    },
    SaveQuestItemHandle: {
        completion: "native SaveQuestItemHandle takes hashtable table, integer parentKey, integer childKey, questitem whichQuestitem returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'questitem', name: 'whichQuestitem', documentation: "" },
      ],
    
    },
    SaveReal: {
        completion: "native SaveReal takes hashtable table, integer parentKey, integer childKey, real value returns nothing",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'value', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SaveRectHandle: {
        completion: "native SaveRectHandle takes hashtable table, integer parentKey, integer childKey, rect whichRect returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'rect', name: 'whichRect', documentation: "" },
      ],
    
    },
    SaveRegionHandle: {
        completion: "native SaveRegionHandle takes hashtable table, integer parentKey, integer childKey, region whichRegion returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'region', name: 'whichRegion', documentation: "" },
      ],
    
    },
    SaveSoundHandle: {
        completion: "native SaveSoundHandle takes hashtable table, integer parentKey, integer childKey, sound whichSound returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'sound', name: 'whichSound', documentation: "" },
      ],
    
    },
    SaveStr: {
        completion: "native SaveStr takes hashtable table, integer parentKey, integer childKey, string value returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'string', name: 'value', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SaveTextTagHandle: {
        completion: "native SaveTextTagHandle takes hashtable table, integer parentKey, integer childKey, texttag whichTexttag returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'texttag', name: 'whichTexttag', documentation: "" },
      ],
    
    },
    SaveTimerDialogHandle: {
        completion: "native SaveTimerDialogHandle takes hashtable table, integer parentKey, integer childKey, timerdialog whichTimerdialog returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'timerdialog', name: 'whichTimerdialog', documentation: "" },
      ],
    
    },
    SaveTimerHandle: {
        completion: "native SaveTimerHandle takes hashtable table, integer parentKey, integer childKey, timer whichTimer returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'timer', name: 'whichTimer', documentation: "a timer reference" },
      ],
    
    },
    SaveTrackableHandle: {
        completion: "native SaveTrackableHandle takes hashtable table, integer parentKey, integer childKey, trackable whichTrackable returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'trackable', name: 'whichTrackable', documentation: "" },
      ],
    
    },
    SaveTriggerActionHandle: {
        completion: "native SaveTriggerActionHandle takes hashtable table, integer parentKey, integer childKey, triggeraction whichTriggeraction returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'triggeraction', name: 'whichTriggeraction', documentation: "" },
      ],
    
    },
    SaveTriggerConditionHandle: {
        completion: "native SaveTriggerConditionHandle takes hashtable table, integer parentKey, integer childKey, triggercondition whichTriggercondition returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'triggercondition', name: 'whichTriggercondition', documentation: "" },
      ],
    
    },
    SaveTriggerEventHandle: {
        completion: "native SaveTriggerEventHandle takes hashtable table, integer parentKey, integer childKey, event whichEvent returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'event', name: 'whichEvent', documentation: "a reference to an event registration" },
      ],
    
    },
    SaveTriggerHandle: {
        completion: "native SaveTriggerHandle takes hashtable table, integer parentKey, integer childKey, trigger whichTrigger returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'trigger', name: 'whichTrigger', documentation: "a trigger reference" },
      ],
    
    },
    SaveUbersplatHandle: {
        completion: "native SaveUbersplatHandle takes hashtable table, integer parentKey, integer childKey, ubersplat whichUbersplat returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'ubersplat', name: 'whichUbersplat', documentation: "" },
      ],
    
    },
    SaveUnitHandle: {
        completion: "native SaveUnitHandle takes hashtable table, integer parentKey, integer childKey, unit whichUnit returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    SaveUnitPoolHandle: {
        completion: "native SaveUnitPoolHandle takes hashtable table, integer parentKey, integer childKey, unitpool whichUnitpool returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'unitpool', name: 'whichUnitpool', documentation: "" },
      ],
    
    },
    SaveWidgetHandle: {
        completion: "native SaveWidgetHandle takes hashtable table, integer parentKey, integer childKey, widget whichWidget returns boolean",
        description: "",
        parameters: [
            { label: 'hashtable', name: 'table', documentation: "" },
            { label: 'integer', name: 'parentKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'childKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'widget', name: 'whichWidget', documentation: "an interactive game object with life" },
      ],
    
    },
    StringHash: {
        completion: "native StringHash takes string s returns integer",
        description: "",
        parameters: [
            { label: 'string', name: 's', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    AutomationSetTestType: {
        completion: "native AutomationSetTestType takes string testType returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'testType', documentation: "strings variables hold a series of characters" },
      ],

    },
    AutomationTestStart: {
        completion: "native AutomationTestStart takes string testName returns nothing",
        description: "",
        parameters: [
            { label: 'string', name: 'testName', documentation: "strings variables hold a series of characters" },
      ],

    },
    AutomationTestEnd: {
        completion: "native AutomationTestEnd takes nothing returns nothing",
        description: "",
        parameters: [
      ],

    },
    AutomationTestingFinished: {
        completion: "native AutomationTestingFinished takes nothing returns nothing",
        description: "",
        parameters: [
      ],

    },
    BlzGetTriggerPlayerMouseX: {
        completion: "native BlzGetTriggerPlayerMouseX takes nothing returns real",
        description: "",
        parameters: [
      ],

    },
    BlzGetTriggerPlayerMouseY: {
        completion: "native BlzGetTriggerPlayerMouseY takes nothing returns real",
        description: "",
        parameters: [
      ],

    },
    BlzGetTriggerPlayerMousePosition: {
        completion: "native BlzGetTriggerPlayerMousePosition takes nothing returns location",
        description: "",
        parameters: [
      ],

    },
    BlzGetTriggerPlayerMouseButton: {
        completion: "native BlzGetTriggerPlayerMouseButton takes nothing returns mousebuttontype",
        description: "",
        parameters: [
      ],

    },
    BlzSetAbilityTooltip: {
        completion: "native BlzSetAbilityTooltip takes integer abilCode, string tooltip, integer level returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'string', name: 'tooltip', documentation: "strings variables hold a series of characters" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetAbilityActivatedTooltip: {
        completion: "native BlzSetAbilityActivatedTooltip takes integer abilCode, string tooltip, integer level returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'string', name: 'tooltip', documentation: "strings variables hold a series of characters" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetAbilityExtendedTooltip: {
        completion: "native BlzSetAbilityExtendedTooltip takes integer abilCode, string extendedTooltip, integer level returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'string', name: 'extendedTooltip', documentation: "strings variables hold a series of characters" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetAbilityActivatedExtendedTooltip: {
        completion: "native BlzSetAbilityActivatedExtendedTooltip takes integer abilCode, string extendedTooltip, integer level returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'string', name: 'extendedTooltip', documentation: "strings variables hold a series of characters" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetAbilityResearchTooltip: {
        completion: "native BlzSetAbilityResearchTooltip takes integer abilCode, string researchTooltip, integer level returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'string', name: 'researchTooltip', documentation: "strings variables hold a series of characters" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetAbilityResearchExtendedTooltip: {
        completion: "native BlzSetAbilityResearchExtendedTooltip takes integer abilCode, string researchExtendedTooltip, integer level returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'string', name: 'researchExtendedTooltip', documentation: "strings variables hold a series of characters" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetAbilityTooltip: {
        completion: "native BlzGetAbilityTooltip takes integer abilCode, integer level returns string",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetAbilityActivatedTooltip: {
        completion: "native BlzGetAbilityActivatedTooltip takes integer abilCode, integer level returns string",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetAbilityExtendedTooltip: {
        completion: "native BlzGetAbilityExtendedTooltip takes integer abilCode, integer level returns string",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetAbilityActivatedExtendedTooltip: {
        completion: "native BlzGetAbilityActivatedExtendedTooltip takes integer abilCode, integer level returns string",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetAbilityResearchTooltip: {
        completion: "native BlzGetAbilityResearchTooltip takes integer abilCode, integer level returns string",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetAbilityResearchExtendedTooltip: {
        completion: "native BlzGetAbilityResearchExtendedTooltip takes integer abilCode, integer level returns string",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetAbilityIcon: {
        completion: "native BlzSetAbilityIcon takes integer abilCode, string iconPath returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'string', name: 'iconPath', documentation: "strings variables hold a series of characters" },
      ],

    },
    BlzGetAbilityIcon: {
        completion: "native BlzGetAbilityIcon takes integer abilCode returns string",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetAbilityActivatedIcon: {
        completion: "native BlzSetAbilityActivatedIcon takes integer abilCode, string iconPath returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'string', name: 'iconPath', documentation: "strings variables hold a series of characters" },
      ],

    },
    BlzGetAbilityActivatedIcon: {
        completion: "native BlzGetAbilityActivatedIcon takes integer abilCode returns string",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetAbilityPosX: {
        completion: "native BlzGetAbilityPosX takes integer abilCode returns integer",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetAbilityPosY: {
        completion: "native BlzGetAbilityPosY takes integer abilCode returns integer",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetAbilityPosX: {
        completion: "native BlzSetAbilityPosX takes integer abilCode, integer x returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'x', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetAbilityPosY: {
        completion: "native BlzSetAbilityPosY takes integer abilCode, integer y returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'y', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetAbilityActivatedPosX: {
        completion: "native BlzGetAbilityActivatedPosX takes integer abilCode returns integer",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetAbilityActivatedPosY: {
        completion: "native BlzGetAbilityActivatedPosY takes integer abilCode returns integer",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetAbilityActivatedPosX: {
        completion: "native BlzSetAbilityActivatedPosX takes integer abilCode, integer x returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'x', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetAbilityActivatedPosY: {
        completion: "native BlzSetAbilityActivatedPosY takes integer abilCode, integer y returns nothing",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'y', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetUnitMaxHP: {
        completion: "native BlzGetUnitMaxHP takes unit whichUnit returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],

    },
    BlzSetUnitMaxHP: {
        completion: "native BlzSetUnitMaxHP takes unit whichUnit, integer hp returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'hp', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetUnitMaxMana: {
        completion: "native BlzGetUnitMaxMana takes unit whichUnit returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],

    },
    BlzSetUnitMaxMana: {
        completion: "native BlzSetUnitMaxMana takes unit whichUnit, integer mana returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'mana', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetItemName: {
        completion: "native BlzSetItemName takes item whichItem, string name returns nothing",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
            { label: 'string', name: 'name', documentation: "strings variables hold a series of characters" },
      ],

    },
    BlzSetItemDescription: {
        completion: "native BlzSetItemDescription takes item whichItem, string description returns nothing",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
            { label: 'string', name: 'description', documentation: "strings variables hold a series of characters" },
      ],

    },
    BlzGetItemDescription: {
        completion: "native BlzGetItemDescription takes item whichItem returns string",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],

    },
    BlzSetItemTooltip: {
        completion: "native BlzSetItemTooltip takes item whichItem, string tooltip returns nothing",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
            { label: 'string', name: 'tooltip', documentation: "strings variables hold a series of characters" },
      ],

    },
    BlzGetItemTooltip: {
        completion: "native BlzGetItemTooltip takes item whichItem returns string",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],

    },
    BlzSetItemExtendedTooltip: {
        completion: "native BlzSetItemExtendedTooltip takes item whichItem, string extendedTooltip returns nothing",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
            { label: 'string', name: 'extendedTooltip', documentation: "strings variables hold a series of characters" },
      ],

    },
    BlzGetItemExtendedTooltip: {
        completion: "native BlzGetItemExtendedTooltip takes item whichItem returns string",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],

    },
    BlzSetItemIconPath: {
        completion: "native BlzSetItemIconPath takes item whichItem, string iconPath returns nothing",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
            { label: 'string', name: 'iconPath', documentation: "strings variables hold a series of characters" },
      ],

    },
    BlzGetItemIconPath: {
        completion: "native BlzGetItemIconPath takes item whichItem returns string",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
      ],

    },
    BlzSetUnitName: {
        completion: "native BlzSetUnitName takes unit whichUnit, string name returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'string', name: 'name', documentation: "strings variables hold a series of characters" },
      ],

    },
    BlzSetHeroProperName: {
        completion: "native BlzSetHeroProperName takes unit whichUnit, string heroProperName returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'string', name: 'heroProperName', documentation: "strings variables hold a series of characters" },
      ],

    },
    BlzGetUnitBaseDamage: {
        completion: "native BlzGetUnitBaseDamage takes unit whichUnit, integer weaponIndex returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'weaponIndex', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetUnitBaseDamage: {
        completion: "native BlzSetUnitBaseDamage takes unit whichUnit, integer baseDamage, integer weaponIndex returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'baseDamage', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'weaponIndex', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetUnitDiceNumber: {
        completion: "native BlzGetUnitDiceNumber takes unit whichUnit, integer weaponIndex returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'weaponIndex', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetUnitDiceNumber: {
        completion: "native BlzSetUnitDiceNumber takes unit whichUnit, integer diceNumber, integer weaponIndex returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'diceNumber', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'weaponIndex', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetUnitDiceSides: {
        completion: "native BlzGetUnitDiceSides takes unit whichUnit, integer weaponIndex returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'weaponIndex', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetUnitDiceSides: {
        completion: "native BlzSetUnitDiceSides takes unit whichUnit, integer diceSides, integer weaponIndex returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'diceSides', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'weaponIndex', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetUnitAttackCooldown: {
        completion: "native BlzGetUnitAttackCooldown takes unit whichUnit, integer weaponIndex returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'weaponIndex', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetUnitAttackCooldown: {
        completion: "native BlzSetUnitAttackCooldown takes unit whichUnit, real cooldown, integer weaponIndex returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'cooldown', documentation: "real variables can hold rational numbers" },
            { label: 'integer', name: 'weaponIndex', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetSpecialEffectColorByPlayer: {
        completion: "native BlzSetSpecialEffectColorByPlayer takes effect whichEffect, player whichPlayer returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],

    },
    BlzSetSpecialEffectColor: {
        completion: "native BlzSetSpecialEffectColor takes effect whichEffect, integer r, integer g, integer b returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'integer', name: 'r', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'g', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'b', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetSpecialEffectAlpha: {
        completion: "native BlzSetSpecialEffectAlpha takes effect whichEffect, integer alpha returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'integer', name: 'alpha', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetSpecialEffectScale: {
        completion: "native BlzSetSpecialEffectScale takes effect whichEffect, real scale returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'real', name: 'scale', documentation: "real variables can hold rational numbers" },
      ],

    },
    BlzSetSpecialEffectPosition: {
        completion: "native BlzSetSpecialEffectPosition takes effect whichEffect, real x, real y, real z returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'z', documentation: "real variables can hold rational numbers" },
      ],

    },
    BlzSetSpecialEffectHeight: {
        completion: "native BlzSetSpecialEffectHeight takes effect whichEffect, real height returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'real', name: 'height', documentation: "real variables can hold rational numbers" },
      ],

    },
    BlzSetSpecialEffectTimeScale: {
        completion: "native BlzSetSpecialEffectTimeScale takes effect whichEffect, real timeScale returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'real', name: 'timeScale', documentation: "real variables can hold rational numbers" },
      ],

    },
    BlzSetSpecialEffectTime: {
        completion: "native BlzSetSpecialEffectTime takes effect whichEffect, real time returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'real', name: 'time', documentation: "real variables can hold rational numbers" },
      ],

    },
    BlzSetSpecialEffectOrientation: {
        completion: "native BlzSetSpecialEffectOrientation takes effect whichEffect, real yaw, real pitch, real roll returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'real', name: 'yaw', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'pitch', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'roll', documentation: "real variables can hold rational numbers" },
      ],

    },
    BlzSetSpecialEffectYaw: {
        completion: "native BlzSetSpecialEffectYaw takes effect whichEffect, real yaw returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'real', name: 'yaw', documentation: "real variables can hold rational numbers" },
      ],

    },
    BlzSetSpecialEffectPitch: {
        completion: "native BlzSetSpecialEffectPitch takes effect whichEffect, real pitch returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'real', name: 'pitch', documentation: "real variables can hold rational numbers" },
      ],

    },
    BlzSetSpecialEffectRoll: {
        completion: "native BlzSetSpecialEffectRoll takes effect whichEffect, real roll returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'real', name: 'roll', documentation: "real variables can hold rational numbers" },
      ],

    },
    BlzSetSpecialEffectX: {
        completion: "native BlzSetSpecialEffectX takes effect whichEffect, real x returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
      ],

    },
    BlzSetSpecialEffectY: {
        completion: "native BlzSetSpecialEffectY takes effect whichEffect, real y returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],

    },
    BlzSetSpecialEffectZ: {
        completion: "native BlzSetSpecialEffectZ takes effect whichEffect, real z returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'real', name: 'z', documentation: "real variables can hold rational numbers" },
      ],

    },
    BlzSetSpecialEffectPositionLoc: {
        completion: "native BlzSetSpecialEffectPositionLoc takes effect whichEffect, location loc returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'location', name: 'loc', documentation: "" },
      ],

    },
    BlzGetLocalSpecialEffectX: {
        completion: "native BlzGetLocalSpecialEffectX takes effect whichEffect returns real",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
      ],

    },
    BlzGetLocalSpecialEffectY: {
        completion: "native BlzGetLocalSpecialEffectY takes effect whichEffect returns real",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
      ],

    },
    BlzGetLocalSpecialEffectZ: {
        completion: "native BlzGetLocalSpecialEffectZ takes effect whichEffect returns real",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
      ],

    },
    BlzSpecialEffectClearSubAnimations: {
        completion: "native BlzSpecialEffectClearSubAnimations takes effect whichEffect returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
      ],

    },
    BlzSpecialEffectRemoveSubAnimation: {
        completion: "native BlzSpecialEffectRemoveSubAnimation takes effect whichEffect, subanimtype whichSubAnim returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'subanimtype', name: 'whichSubAnim', documentation: "" },
      ],

    },
    BlzSpecialEffectAddSubAnimation: {
        completion: "native BlzSpecialEffectAddSubAnimation takes effect whichEffect, subanimtype whichSubAnim returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'subanimtype', name: 'whichSubAnim', documentation: "" },
      ],

    },
    BlzPlaySpecialEffect: {
        completion: "native BlzPlaySpecialEffect takes effect whichEffect, animtype whichAnim returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'animtype', name: 'whichAnim', documentation: "" },
      ],

    },
    BlzPlaySpecialEffectWithTimeScale: {
        completion: "native BlzPlaySpecialEffectWithTimeScale takes effect whichEffect, animtype whichAnim, real timeScale returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'whichEffect', documentation: "" },
            { label: 'animtype', name: 'whichAnim', documentation: "" },
            { label: 'real', name: 'timeScale', documentation: "real variables can hold rational numbers" },
      ],

    },
    BlzGetAnimName: {
        completion: "native BlzGetAnimName takes animtype whichAnim returns string",
        description: "",
        parameters: [
            { label: 'animtype', name: 'whichAnim', documentation: "" },
      ],

    },
    BlzGetUnitArmor: {
        completion: "native BlzGetUnitArmor takes unit whichUnit returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],

    },
    BlzSetUnitArmor: {
        completion: "native BlzSetUnitArmor takes unit whichUnit, real armorAmount returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'armorAmount', documentation: "real variables can hold rational numbers" },
      ],

    },
    BlzUnitHideAbility: {
        completion: "native BlzUnitHideAbility takes unit whichUnit, integer abilId, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'abilId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],

    },
    BlzUnitDisableAbility: {
        completion: "native BlzUnitDisableAbility takes unit whichUnit, integer abilId, boolean flag, boolean hideUI returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'abilId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'hideUI', documentation: "boolean variables can take the values true of false" },
      ],

    },
    BlzUnitCancelTimedLife: {
        completion: "native BlzUnitCancelTimedLife takes unit whichUnit returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],

    },
    BlzIsUnitSelectable: {
        completion: "native BlzIsUnitSelectable takes unit whichUnit returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],

    },
    BlzIsUnitInvulnerable: {
        completion: "native BlzIsUnitInvulnerable takes unit whichUnit returns boolean",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],

    },
    BlzUnitInterruptAttack: {
        completion: "native BlzUnitInterruptAttack takes unit whichUnit returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],

    },
    BlzGetUnitCollisionSize: {
        completion: "native BlzGetUnitCollisionSize takes unit whichUnit returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],

    },
    BlzGetAbilityManaCost: {
        completion: "native BlzGetAbilityManaCost takes integer abilId, integer level returns integer",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetAbilityCooldown: {
        completion: "native BlzGetAbilityCooldown takes integer abilId, integer level returns real",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetUnitAbilityCooldown: {
        completion: "native BlzSetUnitAbilityCooldown takes unit whichUnit, integer abilId, integer level, real cooldown returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'abilId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'cooldown', documentation: "real variables can hold rational numbers" },
      ],

    },
    BlzGetUnitAbilityCooldown: {
        completion: "native BlzGetUnitAbilityCooldown takes unit whichUnit, integer abilId, integer level returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'abilId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetUnitAbilityCooldownRemaining: {
        completion: "native BlzGetUnitAbilityCooldownRemaining takes unit whichUnit, integer abilId returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'abilId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzEndUnitAbilityCooldown: {
        completion: "native BlzEndUnitAbilityCooldown takes unit whichUnit, integer abilCode returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'abilCode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetUnitAbilityManaCost: {
        completion: "native BlzGetUnitAbilityManaCost takes unit whichUnit, integer abilId, integer level returns integer",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'abilId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetUnitAbilityManaCost: {
        completion: "native BlzSetUnitAbilityManaCost takes unit whichUnit, integer abilId, integer level, integer manaCost returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'integer', name: 'abilId', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'level', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'manaCost', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetLocalUnitZ: {
        completion: "native BlzGetLocalUnitZ takes unit whichUnit returns real",
        description: "",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],

    },
    BlzDecPlayerTechResearched: {
        completion: "native BlzDecPlayerTechResearched takes player whichPlayer, integer techid, integer levels returns nothing",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'integer', name: 'techid', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'levels', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzSetEventDamage: {
        completion: "native BlzSetEventDamage takes real damage returns nothing",
        description: "",
        parameters: [
            { label: 'real', name: 'damage', documentation: "real variables can hold rational numbers" },
      ],

    },
    RequestExtraIntegerData: {
        completion: "native RequestExtraIntegerData takes integer dataType, player whichPlayer, string param1, string param2, boolean param3, integer param4, integer param5, integer param6 returns integer",
        description: "",
        parameters: [
            { label: 'integer', name: 'dataType', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'string', name: 'param1', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'param2', documentation: "strings variables hold a series of characters" },
            { label: 'boolean', name: 'param3', documentation: "boolean variables can take the values true of false" },
            { label: 'integer', name: 'param4', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'param5', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'param6', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    RequestExtraBooleanData: {
        completion: "native RequestExtraBooleanData takes integer dataType, player whichPlayer, string param1, string param2, boolean param3, integer param4, integer param5, integer param6 returns boolean",
        description: "",
        parameters: [
            { label: 'integer', name: 'dataType', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'string', name: 'param1', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'param2', documentation: "strings variables hold a series of characters" },
            { label: 'boolean', name: 'param3', documentation: "boolean variables can take the values true of false" },
            { label: 'integer', name: 'param4', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'param5', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'param6', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    RequestExtraStringData: {
        completion: "native RequestExtraStringData takes integer dataType, player whichPlayer, string param1, string param2, boolean param3, integer param4, integer param5, integer param6 returns string",
        description: "",
        parameters: [
            { label: 'integer', name: 'dataType', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'string', name: 'param1', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'param2', documentation: "strings variables hold a series of characters" },
            { label: 'boolean', name: 'param3', documentation: "boolean variables can take the values true of false" },
            { label: 'integer', name: 'param4', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'param5', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'param6', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    RequestExtraRealData: {
        completion: "native RequestExtraRealData takes integer dataType, player whichPlayer, string param1, string param2, boolean param3, integer param4, integer param5, integer param6 returns real",
        description: "",
        parameters: [
            { label: 'integer', name: 'dataType', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'string', name: 'param1', documentation: "strings variables hold a series of characters" },
            { label: 'string', name: 'param2', documentation: "strings variables hold a series of characters" },
            { label: 'boolean', name: 'param3', documentation: "boolean variables can take the values true of false" },
            { label: 'integer', name: 'param4', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'param5', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'param6', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],

    },
    BlzGetUnitZ: {
        completion: "native BlzGetUnitZ takes unit whichUnit returns real",
        description: "Add this function to follow the style of GetUnitX and GetUnitY, it has the same result as BlzGetLocalUnitZ",
        parameters: [
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],

    },
    
};

exports.bjfunctions = {
    BJDebugMsg: {
        completion: "function BJDebugMsg takes string msg returns nothing\r\n    local integer i = 0\r\n    loop\r\n        call DisplayTimedTextToPlayer(Player(i),0,0,60,msg)\r\n        set i = i + 1\r\n        exitwhen i == bj_MAX_PLAYERS\r\n    endloop\r\nendfunction",
        description: "",
        parameters: [
            { label: 'string', name: 'msg', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    RMinBJ: {
        completion: "function RMinBJ takes real a, real b returns real\r\n    if (a < b) then\r\n        return a\r\n    else\r\n        return b\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'a', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'b', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    RMaxBJ: {
        completion: "function RMaxBJ takes real a, real b returns real\r\n    if (a < b) then\r\n        return b\r\n    else\r\n        return a\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'a', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'b', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    RAbsBJ: {
        completion: "function RAbsBJ takes real a returns real\r\n    if (a >= 0) then\r\n        return a\r\n    else\r\n        return -a\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'a', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    RSignBJ: {
        completion: "function RSignBJ takes real a returns real\r\n    if (a >= 0.0) then\r\n        return 1.0\r\n    else\r\n        return -1.0\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'a', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    IMinBJ: {
        completion: "function IMinBJ takes integer a, integer b returns integer\r\n    if (a < b) then\r\n        return a\r\n    else\r\n        return b\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'integer', name: 'a', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'b', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    IMaxBJ: {
        completion: "function IMaxBJ takes integer a, integer b returns integer\r\n    if (a < b) then\r\n        return b\r\n    else\r\n        return a\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'integer', name: 'a', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'b', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    IAbsBJ: {
        completion: "function IAbsBJ takes integer a returns integer\r\n    if (a >= 0) then\r\n        return a\r\n    else\r\n        return -a\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'integer', name: 'a', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ISignBJ: {
        completion: "function ISignBJ takes integer a returns integer\r\n    if (a >= 0) then\r\n        return 1\r\n    else\r\n        return -1\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'integer', name: 'a', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SinBJ: {
        completion: "function SinBJ takes real degrees returns real\r\n    return Sin(degrees * bj_DEGTORAD)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'degrees', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CosBJ: {
        completion: "function CosBJ takes real degrees returns real\r\n    return Cos(degrees * bj_DEGTORAD)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'degrees', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    TanBJ: {
        completion: "function TanBJ takes real degrees returns real\r\n    return Tan(degrees * bj_DEGTORAD)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'degrees', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    AsinBJ: {
        completion: "function AsinBJ takes real degrees returns real\r\n    return Asin(degrees) * bj_RADTODEG\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'degrees', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    AcosBJ: {
        completion: "function AcosBJ takes real degrees returns real\r\n    return Acos(degrees) * bj_RADTODEG\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'degrees', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    AtanBJ: {
        completion: "function AtanBJ takes real degrees returns real\r\n    return Atan(degrees) * bj_RADTODEG\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'degrees', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    Atan2BJ: {
        completion: "function Atan2BJ takes real y, real x returns real\r\n    return Atan2(y, x) * bj_RADTODEG\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    AngleBetweenPoints: {
        completion: "function AngleBetweenPoints takes location locA, location locB returns real\r\n    return bj_RADTODEG * Atan2(GetLocationY(locB) - GetLocationY(locA), GetLocationX(locB) - GetLocationX(locA))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'location', name: 'locA', documentation: "" },
            { label: 'location', name: 'locB', documentation: "" },
      ],
    
    },
    DistanceBetweenPoints: {
        completion: "function DistanceBetweenPoints takes location locA, location locB returns real\r\n    local real dx = GetLocationX(locB) - GetLocationX(locA)\r\n    local real dy = GetLocationY(locB) - GetLocationY(locA)\r\n    return SquareRoot(dx * dx + dy * dy)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'location', name: 'locA', documentation: "" },
            { label: 'location', name: 'locB', documentation: "" },
      ],
    
    },
    PolarProjectionBJ: {
        completion: "function PolarProjectionBJ takes location source, real dist, real angle returns location\r\n    local real x = GetLocationX(source) + dist * Cos(angle * bj_DEGTORAD)\r\n    local real y = GetLocationY(source) + dist * Sin(angle * bj_DEGTORAD)\r\n    return Location(x, y)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'location', name: 'source', documentation: "" },
            { label: 'real', name: 'dist', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'angle', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetRandomDirectionDeg: {
        completion: "function GetRandomDirectionDeg takes nothing returns real\r\n    return GetRandomReal(0, 360)\r\nendfunction",
        description: "",
    
    },
    GetRandomPercentageBJ: {
        completion: "function GetRandomPercentageBJ takes nothing returns real\r\n    return GetRandomReal(0, 100)\r\nendfunction",
        description: "",
    
    },
    GetRandomLocInRect: {
        completion: "function GetRandomLocInRect takes rect whichRect returns location\r\n    return Location(GetRandomReal(GetRectMinX(whichRect), GetRectMaxX(whichRect)), GetRandomReal(GetRectMinY(whichRect), GetRectMaxY(whichRect)))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'rect', name: 'whichRect', documentation: "" },
      ],
    
    },
    ModuloInteger: {
        completion: "function ModuloInteger takes integer dividend, integer divisor returns integer\r\n    local integer modulus = dividend - (dividend / divisor) * divisor\r\n\r\n    // If the dividend was negative, the above modulus calculation will\r\n    // be negative, but within (-divisor..0).  We can add (divisor) to\r\n    // shift this result into the desired range of (0..divisor).\r\n    if (modulus < 0) then\r\n        set modulus = modulus + divisor\r\n    endif\r\n\r\n    return modulus\r\nendfunction",
        description: "",
        parameters: [
            { label: 'integer', name: 'dividend', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'divisor', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ModuloReal: {
        completion: "function ModuloReal takes real dividend, real divisor returns real\r\n    local real modulus = dividend - I2R(R2I(dividend / divisor)) * divisor\r\n\r\n    // If the dividend was negative, the above modulus calculation will\r\n    // be negative, but within (-divisor..0).  We can add (divisor) to\r\n    // shift this result into the desired range of (0..divisor).\r\n    if (modulus < 0) then\r\n        set modulus = modulus + divisor\r\n    endif\r\n\r\n    return modulus\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'dividend', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'divisor', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    OffsetLocation: {
        completion: "function OffsetLocation takes location loc, real dx, real dy returns location\r\n    return Location(GetLocationX(loc) + dx, GetLocationY(loc) + dy)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'location', name: 'loc', documentation: "" },
            { label: 'real', name: 'dx', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'dy', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    OffsetRectBJ: {
        completion: "function OffsetRectBJ takes rect r, real dx, real dy returns rect\r\n    return Rect( GetRectMinX(r) + dx, GetRectMinY(r) + dy, GetRectMaxX(r) + dx, GetRectMaxY(r) + dy )\r\nendfunction",
        description: "",
        parameters: [
            { label: 'rect', name: 'r', documentation: "" },
            { label: 'real', name: 'dx', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'dy', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    RectFromCenterSizeBJ: {
        completion: "function RectFromCenterSizeBJ takes location center, real width, real height returns rect\r\n    local real x = GetLocationX( center )\r\n    local real y = GetLocationY( center )\r\n    return Rect( x - width*0.5, y - height*0.5, x + width*0.5, y + height*0.5 )\r\nendfunction",
        description: "",
        parameters: [
            { label: 'location', name: 'center', documentation: "" },
            { label: 'real', name: 'width', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'height', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    RectContainsCoords: {
        completion: "function RectContainsCoords takes rect r, real x, real y returns boolean\r\n    return (GetRectMinX(r) <= x) and (x <= GetRectMaxX(r)) and (GetRectMinY(r) <= y) and (y <= GetRectMaxY(r))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'rect', name: 'r', documentation: "" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    RectContainsLoc: {
        completion: "function RectContainsLoc takes rect r, location loc returns boolean\r\n    return RectContainsCoords(r, GetLocationX(loc), GetLocationY(loc))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'rect', name: 'r', documentation: "" },
            { label: 'location', name: 'loc', documentation: "" },
      ],
    
    },
    RectContainsUnit: {
        completion: "function RectContainsUnit takes rect r, unit whichUnit returns boolean\r\n    return RectContainsCoords(r, GetUnitX(whichUnit), GetUnitY(whichUnit))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'rect', name: 'r', documentation: "" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    RectContainsItem: {
        completion: "function RectContainsItem takes item whichItem, rect r returns boolean\r\n    if (whichItem == null) then\r\n        return false\r\n    endif\r\n\r\n    if (IsItemOwned(whichItem)) then\r\n        return false\r\n    endif\r\n\r\n    return RectContainsCoords(r, GetItemX(whichItem), GetItemY(whichItem))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'item', name: 'whichItem', documentation: "a single item reference" },
            { label: 'rect', name: 'r', documentation: "" },
      ],
    
    },
    ConditionalTriggerExecute: {
        completion: "function ConditionalTriggerExecute takes trigger trig returns nothing\r\n    if TriggerEvaluate(trig) then\r\n        call TriggerExecute(trig)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
      ],
    
    },
    TriggerExecuteBJ: {
        completion: "function TriggerExecuteBJ takes trigger trig, boolean checkConditions returns boolean\r\n    if checkConditions then\r\n        if not (TriggerEvaluate(trig)) then\r\n            return false\r\n        endif\r\n    endif\r\n    call TriggerExecute(trig)\r\n    return true\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'boolean', name: 'checkConditions', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    PostTriggerExecuteBJ: {
        completion: "function PostTriggerExecuteBJ takes trigger trig, boolean checkConditions returns boolean\r\n    if checkConditions then\r\n        if not (TriggerEvaluate(trig)) then\r\n            return false\r\n        endif\r\n    endif\r\n    call TriggerRegisterTimerEvent(trig, 0, false)\r\n    return true\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'boolean', name: 'checkConditions', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    QueuedTriggerCheck: {
        completion: "function QueuedTriggerCheck takes nothing returns nothing\r\n    local string s = \"TrigQueue Check \"\r\n    local integer i\r\n\r\n    set i = 0\r\n    loop\r\n        exitwhen i >= bj_queuedExecTotal\r\n        set s = s + \"\r\n    local integer i\r\n\r\n    set i = 0\r\n    loop\r\n        exitwhen i >= bj_queuedExecTotal\r\n        set s = s + \"q[\" + I2S(i) + \"]=\"\r\n        if (bj_queuedExecTriggers[i] == null) then\r\n            set s = s + \"null \"\r\n        else\r\n            set s = s + \"x \"\r\n        endif\r\n        set i = i + 1\r\n    endloop\r\n    set s = s + \"(\" + I2S(bj_queuedExecTotal) + \" total)\"\r\n    call DisplayTimedTextToPlayer(GetLocalPlayer(),0,0,600,s)\r\nendfunction",
        description: "",
    
    },
    QueuedTriggerGetIndex: {
        completion: "function QueuedTriggerGetIndex takes trigger trig returns integer\r\n    // Determine which, if any, of the queued triggers is being removed.\r\n    local integer index     = 0\r\n    loop\r\n        exitwhen index >= bj_queuedExecTotal\r\n        if (bj_queuedExecTriggers[index] == trig) then\r\n            return index\r\n        endif\r\n        set index = index + 1\r\n    endloop\r\n    return -1\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
      ],
    
    },
    QueuedTriggerRemoveByIndex: {
        completion: "function QueuedTriggerRemoveByIndex takes integer trigIndex returns boolean\r\n    local integer index\r\n\r\n    // If the to-be-removed index is out of range, fail.\r\n    if (trigIndex >= bj_queuedExecTotal) then\r\n        return false\r\n    endif\r\n\r\n    // Shift all queue entries down to fill in the gap.\r\n    set bj_queuedExecTotal = bj_queuedExecTotal - 1\r\n    set index = trigIndex\r\n    loop\r\n        exitwhen index >= bj_queuedExecTotal\r\n        set bj_queuedExecTriggers[index] = bj_queuedExecTriggers[index + 1]\r\n        set bj_queuedExecUseConds[index] = bj_queuedExecUseConds[index + 1]\r\n        set index = index + 1\r\n    endloop\r\n    return true\r\nendfunction",
        description: "",
        parameters: [
            { label: 'integer', name: 'trigIndex', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    QueuedTriggerAttemptExec: {
        completion: "function QueuedTriggerAttemptExec takes nothing returns boolean\r\n    loop\r\n        exitwhen bj_queuedExecTotal == 0\r\n\r\n        if TriggerExecuteBJ(bj_queuedExecTriggers[0], bj_queuedExecUseConds[0]) then\r\n            // Timeout the queue if it sits at the front of the queue for too long.\r\n            call TimerStart(bj_queuedExecTimeoutTimer, bj_QUEUED_TRIGGER_TIMEOUT, false, null)\r\n            return true\r\n        endif\r\n\r\n        call QueuedTriggerRemoveByIndex(0)\r\n    endloop\r\n    return false\r\nendfunction",
        description: "",
    
    },
    QueuedTriggerAddBJ: {
        completion: "function QueuedTriggerAddBJ takes trigger trig, boolean checkConditions returns boolean\r\n    // Make sure our queue isn't full.  If it is, return failure.\r\n    if (bj_queuedExecTotal >= bj_MAX_QUEUED_TRIGGERS) then\r\n        return false\r\n    endif\r\n\r\n    // Add the trigger to an array of to-be-executed triggers.\r\n    set bj_queuedExecTriggers[bj_queuedExecTotal] = trig\r\n    set bj_queuedExecUseConds[bj_queuedExecTotal] = checkConditions\r\n    set bj_queuedExecTotal = bj_queuedExecTotal + 1\r\n\r\n    // If this is the only trigger in the queue, run it.\r\n    if (bj_queuedExecTotal == 1) then\r\n        call QueuedTriggerAttemptExec()\r\n    endif\r\n    return true\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'boolean', name: 'checkConditions', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    QueuedTriggerRemoveBJ: {
        completion: "function QueuedTriggerRemoveBJ takes trigger trig returns nothing\r\n    local integer index\r\n    local integer trigIndex\r\n    local boolean trigExecuted\r\n\r\n    // Find the trigger's index.\r\n    set trigIndex = QueuedTriggerGetIndex(trig)\r\n    if (trigIndex == -1) then\r\n        return\r\n    endif\r\n\r\n    // Shuffle the other trigger entries down to fill in the gap.\r\n    call QueuedTriggerRemoveByIndex(trigIndex)\r\n\r\n    // If we just axed the currently running trigger, run the next one.\r\n    if (trigIndex == 0) then\r\n        call PauseTimer(bj_queuedExecTimeoutTimer)\r\n        call QueuedTriggerAttemptExec()\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
      ],
    
    },
    QueuedTriggerDoneBJ: {
        completion: "function QueuedTriggerDoneBJ takes nothing returns nothing\r\n    local integer index\r\n\r\n    // Make sure there's something on the queue to remove.\r\n    if (bj_queuedExecTotal <= 0) then\r\n        return\r\n    endif\r\n\r\n    // Remove the currently running trigger from the array.\r\n    call QueuedTriggerRemoveByIndex(0)\r\n\r\n    // If other triggers are waiting to run, run one of them.\r\n    call PauseTimer(bj_queuedExecTimeoutTimer)\r\n    call QueuedTriggerAttemptExec()\r\nendfunction",
        description: "",
    
    },
    QueuedTriggerClearBJ: {
        completion: "function QueuedTriggerClearBJ takes nothing returns nothing\r\n    call PauseTimer(bj_queuedExecTimeoutTimer)\r\n    set bj_queuedExecTotal = 0\r\nendfunction",
        description: "",
    
    },
    QueuedTriggerClearInactiveBJ: {
        completion: "function QueuedTriggerClearInactiveBJ takes nothing returns nothing\r\n    set bj_queuedExecTotal = IMinBJ(bj_queuedExecTotal, 1)\r\nendfunction",
        description: "",
    
    },
    QueuedTriggerCountBJ: {
        completion: "function QueuedTriggerCountBJ takes nothing returns integer\r\n    return bj_queuedExecTotal\r\nendfunction",
        description: "",
    
    },
    IsTriggerQueueEmptyBJ: {
        completion: "function IsTriggerQueueEmptyBJ takes nothing returns boolean\r\n    return bj_queuedExecTotal <= 0\r\nendfunction",
        description: "",
    
    },
    IsTriggerQueuedBJ: {
        completion: "function IsTriggerQueuedBJ takes trigger trig returns boolean\r\n    return QueuedTriggerGetIndex(trig) != -1\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
      ],
    
    },
    GetForLoopIndexA: {
        completion: "function GetForLoopIndexA takes nothing returns integer\r\n    return bj_forLoopAIndex\r\nendfunction",
        description: "",
    
    },
    SetForLoopIndexA: {
        completion: "function SetForLoopIndexA takes integer newIndex returns nothing\r\n    set bj_forLoopAIndex = newIndex\r\nendfunction",
        description: "",
        parameters: [
            { label: 'integer', name: 'newIndex', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetForLoopIndexB: {
        completion: "function GetForLoopIndexB takes nothing returns integer\r\n    return bj_forLoopBIndex\r\nendfunction",
        description: "",
    
    },
    SetForLoopIndexB: {
        completion: "function SetForLoopIndexB takes integer newIndex returns nothing\r\n    set bj_forLoopBIndex = newIndex\r\nendfunction",
        description: "",
        parameters: [
            { label: 'integer', name: 'newIndex', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    PolledWait: {
        completion: "function PolledWait takes real duration returns nothing\r\n    local timer t\r\n    local real  timeRemaining\r\n\r\n    if (duration > 0) then\r\n        set t = CreateTimer()\r\n        call TimerStart(t, duration, false, null)\r\n        loop\r\n            set timeRemaining = TimerGetRemaining(t)\r\n            exitwhen timeRemaining <= 0\r\n\r\n            // If we have a bit of time left, skip past 10% of the remaining\r\n            // duration instead of checking every interval, to minimize the\r\n            // polling on long waits.\r\n            if (timeRemaining > bj_POLLED_WAIT_SKIP_THRESHOLD) then\r\n                call TriggerSleepAction(0.1 * timeRemaining)\r\n            else\r\n                call TriggerSleepAction(bj_POLLED_WAIT_INTERVAL)\r\n            endif\r\n        endloop\r\n        call DestroyTimer(t)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    IntegerTertiaryOp: {
        completion: "function IntegerTertiaryOp takes boolean flag, integer valueA, integer valueB returns integer\r\n    if flag then\r\n        return valueA\r\n    else\r\n        return valueB\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
            { label: 'integer', name: 'valueA', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'valueB', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    DoNothing: {
        completion: "function DoNothing takes nothing returns nothing\r\nendfunction",
        description: "",
    
    },
    CommentString: {
        completion: "function CommentString takes string commentString returns nothing\r\nendfunction",
        description: "",
        parameters: [
            { label: 'string', name: 'commentString', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    StringIdentity: {
        completion: "function StringIdentity takes string theString returns string\r\n    return GetLocalizedString(theString)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'string', name: 'theString', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    GetBooleanAnd: {
        completion: "function GetBooleanAnd takes boolean valueA, boolean valueB returns boolean\r\n    return valueA and valueB\r\nendfunction",
        description: "",
        parameters: [
            { label: 'boolean', name: 'valueA', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'valueB', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    GetBooleanOr: {
        completion: "function GetBooleanOr takes boolean valueA, boolean valueB returns boolean\r\n    return valueA or valueB\r\nendfunction",
        description: "",
        parameters: [
            { label: 'boolean', name: 'valueA', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'valueB', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    PercentToInt: {
        completion: "function PercentToInt takes real percentage, integer max returns integer\r\n    local integer result = R2I(percentage * I2R(max) * 0.01)\r\n\r\n    if (result < 0) then\r\n        set result = 0\r\n    elseif (result > max) then\r\n        set result = max\r\n    endif\r\n\r\n    return result\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'percentage', documentation: "real variables can hold rational numbers" },
            { label: 'integer', name: 'max', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    PercentTo255: {
        completion: "function PercentTo255 takes real percentage returns integer\r\n    return PercentToInt(percentage, 255)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'percentage', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetTimeOfDay: {
        completion: "function GetTimeOfDay takes nothing returns real\r\n    return GetFloatGameState(GAME_STATE_TIME_OF_DAY)\r\nendfunction",
        description: "",
    
    },
    SetTimeOfDay: {
        completion: "function SetTimeOfDay takes real whatTime returns nothing\r\n    call SetFloatGameState(GAME_STATE_TIME_OF_DAY, whatTime)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'whatTime', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetTimeOfDayScalePercentBJ: {
        completion: "function SetTimeOfDayScalePercentBJ takes real scalePercent returns nothing\r\n    call SetTimeOfDayScale(scalePercent * 0.01)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'scalePercent', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetTimeOfDayScalePercentBJ: {
        completion: "function GetTimeOfDayScalePercentBJ takes nothing returns real\r\n    return GetTimeOfDayScale() * 100\r\nendfunction",
        description: "",
    
    },
    PlaySound: {
        completion: "function PlaySound takes string soundName returns nothing\r\n    local sound soundHandle = CreateSound(soundName, false, false, true, 12700, 12700, \"\")\r\n    call StartSound(soundHandle)\r\n    call KillSoundWhenDone(soundHandle)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'string', name: 'soundName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    CompareLocationsBJ: {
        completion: "function CompareLocationsBJ takes location A, location B returns boolean\r\n    return GetLocationX(A) == GetLocationX(B) and GetLocationY(A) == GetLocationY(B)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'location', name: 'A', documentation: "" },
            { label: 'location', name: 'B', documentation: "" },
      ],
    
    },
    CompareRectsBJ: {
        completion: "function CompareRectsBJ takes rect A, rect B returns boolean\r\n    return GetRectMinX(A) == GetRectMinX(B) and GetRectMinY(A) == GetRectMinY(B) and GetRectMaxX(A) == GetRectMaxX(B) and GetRectMaxY(A) == GetRectMaxY(B)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'rect', name: 'A', documentation: "" },
            { label: 'rect', name: 'B', documentation: "" },
      ],
    
    },
    GetRectFromCircleBJ: {
        completion: "function GetRectFromCircleBJ takes location center, real radius returns rect\r\n    local real centerX = GetLocationX(center)\r\n    local real centerY = GetLocationY(center)\r\n    return Rect(centerX - radius, centerY - radius, centerX + radius, centerY + radius)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'location', name: 'center', documentation: "" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetCurrentCameraSetup: {
        completion: "function GetCurrentCameraSetup takes nothing returns camerasetup\r\n    local camerasetup theCam = CreateCameraSetup()\r\n    local real duration = 0\r\n    call CameraSetupSetField(theCam, CAMERA_FIELD_TARGET_DISTANCE, GetCameraField(CAMERA_FIELD_TARGET_DISTANCE), duration)\r\n    call CameraSetupSetField(theCam, CAMERA_FIELD_FARZ,            GetCameraField(CAMERA_FIELD_FARZ),            duration)\r\n    call CameraSetupSetField(theCam, CAMERA_FIELD_ZOFFSET,         GetCameraField(CAMERA_FIELD_ZOFFSET),         duration)\r\n    call CameraSetupSetField(theCam, CAMERA_FIELD_ANGLE_OF_ATTACK, bj_RADTODEG * GetCameraField(CAMERA_FIELD_ANGLE_OF_ATTACK), duration)\r\n    call CameraSetupSetField(theCam, CAMERA_FIELD_FIELD_OF_VIEW,   bj_RADTODEG * GetCameraField(CAMERA_FIELD_FIELD_OF_VIEW),   duration)\r\n    call CameraSetupSetField(theCam, CAMERA_FIELD_ROLL,            bj_RADTODEG * GetCameraField(CAMERA_FIELD_ROLL),            duration)\r\n    call CameraSetupSetField(theCam, CAMERA_FIELD_ROTATION,        bj_RADTODEG * GetCameraField(CAMERA_FIELD_ROTATION),        duration)\r\n    call CameraSetupSetDestPosition(theCam, GetCameraTargetPositionX(), GetCameraTargetPositionY(), duration)\r\n    return theCam\r\nendfunction",
        description: "",
    
    },
    CameraSetupApplyForPlayer: {
        completion: "function CameraSetupApplyForPlayer takes boolean doPan, camerasetup whichSetup, player whichPlayer, real duration returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call CameraSetupApplyForceDuration(whichSetup, doPan, duration)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'boolean', name: 'doPan', documentation: "boolean variables can take the values true of false" },
            { label: 'camerasetup', name: 'whichSetup', documentation: "" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CameraSetupGetFieldSwap: {
        completion: "function CameraSetupGetFieldSwap takes camerafield whichField, camerasetup whichSetup returns real\r\n    return CameraSetupGetField(whichSetup, whichField)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'camerafield', name: 'whichField', documentation: "" },
            { label: 'camerasetup', name: 'whichSetup', documentation: "" },
      ],
    
    },
    SetCameraFieldForPlayer: {
        completion: "function SetCameraFieldForPlayer takes player whichPlayer, camerafield whichField, real value, real duration returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call SetCameraField(whichField, value, duration)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'camerafield', name: 'whichField', documentation: "" },
            { label: 'real', name: 'value', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetCameraTargetControllerNoZForPlayer: {
        completion: "function SetCameraTargetControllerNoZForPlayer takes player whichPlayer, unit whichUnit, real xoffset, real yoffset, boolean inheritOrientation returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call SetCameraTargetController(whichUnit, xoffset, yoffset, inheritOrientation)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'xoffset', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'yoffset', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'inheritOrientation', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetCameraPositionForPlayer: {
        completion: "function SetCameraPositionForPlayer takes player whichPlayer, real x, real y returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call SetCameraPosition(x, y)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetCameraPositionLocForPlayer: {
        completion: "function SetCameraPositionLocForPlayer takes player whichPlayer, location loc returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call SetCameraPosition(GetLocationX(loc), GetLocationY(loc))\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'location', name: 'loc', documentation: "" },
      ],
    
    },
    RotateCameraAroundLocBJ: {
        completion: "function RotateCameraAroundLocBJ takes real degrees, location loc, player whichPlayer, real duration returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call SetCameraRotateMode(GetLocationX(loc), GetLocationY(loc), bj_DEGTORAD * degrees, duration)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'degrees', documentation: "real variables can hold rational numbers" },
            { label: 'location', name: 'loc', documentation: "" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    PanCameraToForPlayer: {
        completion: "function PanCameraToForPlayer takes player whichPlayer, real x, real y returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call PanCameraTo(x, y)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    PanCameraToLocForPlayer: {
        completion: "function PanCameraToLocForPlayer takes player whichPlayer, location loc returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call PanCameraTo(GetLocationX(loc), GetLocationY(loc))\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'location', name: 'loc', documentation: "" },
      ],
    
    },
    PanCameraToTimedForPlayer: {
        completion: "function PanCameraToTimedForPlayer takes player whichPlayer, real x, real y, real duration returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call PanCameraToTimed(x, y, duration)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    PanCameraToTimedLocForPlayer: {
        completion: "function PanCameraToTimedLocForPlayer takes player whichPlayer, location loc, real duration returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call PanCameraToTimed(GetLocationX(loc), GetLocationY(loc), duration)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'location', name: 'loc', documentation: "" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    PanCameraToTimedLocWithZForPlayer: {
        completion: "function PanCameraToTimedLocWithZForPlayer takes player whichPlayer, location loc, real zOffset, real duration returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call PanCameraToTimedWithZ(GetLocationX(loc), GetLocationY(loc), zOffset, duration)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'location', name: 'loc', documentation: "" },
            { label: 'real', name: 'zOffset', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SmartCameraPanBJ: {
        completion: "function SmartCameraPanBJ takes player whichPlayer, location loc, real duration returns nothing\r\n    local real dist\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\r\n        set dist = DistanceBetweenPoints(loc, GetCameraTargetPositionLoc())\r\n        if (dist >= bj_SMARTPAN_TRESHOLD_SNAP) then\r\n            // If the user is too far away, snap the camera.\r\n            call PanCameraToTimed(GetLocationX(loc), GetLocationY(loc), 0)\r\n        elseif (dist >= bj_SMARTPAN_TRESHOLD_PAN) then\r\n            // If the user is moderately close, pan the camera.\r\n            call PanCameraToTimed(GetLocationX(loc), GetLocationY(loc), duration)\r\n        else\r\n            // User is close enough, so don't touch the camera.\r\n        endif\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'location', name: 'loc', documentation: "" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetCinematicCameraForPlayer: {
        completion: "function SetCinematicCameraForPlayer takes player whichPlayer, string cameraModelFile returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call SetCinematicCamera(cameraModelFile)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'string', name: 'cameraModelFile', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    ResetToGameCameraForPlayer: {
        completion: "function ResetToGameCameraForPlayer takes player whichPlayer, real duration returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call ResetToGameCamera(duration)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CameraSetSourceNoiseForPlayer: {
        completion: "function CameraSetSourceNoiseForPlayer takes player whichPlayer, real magnitude, real velocity returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call CameraSetSourceNoise(magnitude, velocity)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'magnitude', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'velocity', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CameraSetTargetNoiseForPlayer: {
        completion: "function CameraSetTargetNoiseForPlayer takes player whichPlayer, real magnitude, real velocity returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call CameraSetTargetNoise(magnitude, velocity)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'magnitude', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'velocity', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CameraSetEQNoiseForPlayer: {
        completion: "function CameraSetEQNoiseForPlayer takes player whichPlayer, real magnitude returns nothing\r\n    local real richter = magnitude\r\n    if (richter > 5.0) then\r\n        set richter = 5.0\r\n    endif\r\n    if (richter < 2.0) then\r\n        set richter = 2.0\r\n    endif\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call CameraSetTargetNoiseEx(magnitude*2.0, magnitude*Pow(10,richter),true)\r\n        call CameraSetSourceNoiseEx(magnitude*2.0, magnitude*Pow(10,richter),true)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'magnitude', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CameraClearNoiseForPlayer: {
        completion: "function CameraClearNoiseForPlayer takes player whichPlayer returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call CameraSetSourceNoise(0, 0)\r\n        call CameraSetTargetNoise(0, 0)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    GetCurrentCameraBoundsMapRectBJ: {
        completion: "function GetCurrentCameraBoundsMapRectBJ takes nothing returns rect\r\n    return Rect(GetCameraBoundMinX(), GetCameraBoundMinY(), GetCameraBoundMaxX(), GetCameraBoundMaxY())\r\nendfunction",
        description: "",
    
    },
    GetCameraBoundsMapRect: {
        completion: "function GetCameraBoundsMapRect takes nothing returns rect\r\n    return bj_mapInitialCameraBounds\r\nendfunction",
        description: "",
    
    },
    GetPlayableMapRect: {
        completion: "function GetPlayableMapRect takes nothing returns rect\r\n    return bj_mapInitialPlayableArea\r\nendfunction",
        description: "",
    
    },
    GetEntireMapRect: {
        completion: "function GetEntireMapRect takes nothing returns rect\r\n    return GetWorldBounds()\r\nendfunction",
        description: "",
    
    },
    SetCameraBoundsToRect: {
        completion: "function SetCameraBoundsToRect takes rect r returns nothing\r\n    local real minX = GetRectMinX(r)\r\n    local real minY = GetRectMinY(r)\r\n    local real maxX = GetRectMaxX(r)\r\n    local real maxY = GetRectMaxY(r)\r\n    call SetCameraBounds(minX, minY, minX, maxY, maxX, maxY, maxX, minY)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'rect', name: 'r', documentation: "" },
      ],
    
    },
    SetCameraBoundsToRectForPlayerBJ: {
        completion: "function SetCameraBoundsToRectForPlayerBJ takes player whichPlayer, rect r returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call SetCameraBoundsToRect(r)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'rect', name: 'r', documentation: "" },
      ],
    
    },
    AdjustCameraBoundsBJ: {
        completion: "function AdjustCameraBoundsBJ takes integer adjustMethod, real dxWest, real dxEast, real dyNorth, real dySouth returns nothing\r\n    local real minX = 0\r\n    local real minY = 0\r\n    local real maxX = 0\r\n    local real maxY = 0\r\n    local real scale = 0\r\n\r\n    if (adjustMethod == bj_CAMERABOUNDS_ADJUST_ADD) then\r\n        set scale = 1\r\n    elseif (adjustMethod == bj_CAMERABOUNDS_ADJUST_SUB) then\r\n        set scale = -1\r\n    else\r\n        // Unrecognized adjustment method - ignore the request.\r\n        return\r\n    endif\r\n\r\n    // Adjust the actual camera values\r\n    set minX = GetCameraBoundMinX() - scale * dxWest\r\n    set maxX = GetCameraBoundMaxX() + scale * dxEast\r\n    set minY = GetCameraBoundMinY() - scale * dySouth\r\n    set maxY = GetCameraBoundMaxY() + scale * dyNorth\r\n\r\n    // Make sure the camera bounds are still valid.\r\n    if (maxX < minX) then\r\n        set minX = (minX + maxX) * 0.5\r\n        set maxX = minX\r\n    endif\r\n    if (maxY < minY) then\r\n        set minY = (minY + maxY) * 0.5\r\n        set maxY = minY\r\n    endif\r\n\r\n    // Apply the new camera values.\r\n    call SetCameraBounds(minX, minY, minX, maxY, maxX, maxY, maxX, minY)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'integer', name: 'adjustMethod', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'dxWest', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'dxEast', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'dyNorth', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'dySouth', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    AdjustCameraBoundsForPlayerBJ: {
        completion: "function AdjustCameraBoundsForPlayerBJ takes integer adjustMethod, player whichPlayer, real dxWest, real dxEast, real dyNorth, real dySouth returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call AdjustCameraBoundsBJ(adjustMethod, dxWest, dxEast, dyNorth, dySouth)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'integer', name: 'adjustMethod', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'dxWest', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'dxEast', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'dyNorth', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'dySouth', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetCameraQuickPositionForPlayer: {
        completion: "function SetCameraQuickPositionForPlayer takes player whichPlayer, real x, real y returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call SetCameraQuickPosition(x, y)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'real', name: 'x', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'y', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetCameraQuickPositionLocForPlayer: {
        completion: "function SetCameraQuickPositionLocForPlayer takes player whichPlayer, location loc returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call SetCameraQuickPosition(GetLocationX(loc), GetLocationY(loc))\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'location', name: 'loc', documentation: "" },
      ],
    
    },
    SetCameraQuickPositionLoc: {
        completion: "function SetCameraQuickPositionLoc takes location loc returns nothing\r\n    call SetCameraQuickPosition(GetLocationX(loc), GetLocationY(loc))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'location', name: 'loc', documentation: "" },
      ],
    
    },
    StopCameraForPlayerBJ: {
        completion: "function StopCameraForPlayerBJ takes player whichPlayer returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call StopCamera()\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    SetCameraOrientControllerForPlayerBJ: {
        completion: "function SetCameraOrientControllerForPlayerBJ takes player whichPlayer, unit whichUnit, real xoffset, real yoffset returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call SetCameraOrientController(whichUnit, xoffset, yoffset)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'real', name: 'xoffset', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'yoffset', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CameraSetSmoothingFactorBJ: {
        completion: "function CameraSetSmoothingFactorBJ takes real factor returns nothing\r\n    call CameraSetSmoothingFactor(factor)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'factor', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CameraResetSmoothingFactorBJ: {
        completion: "function CameraResetSmoothingFactorBJ takes nothing returns nothing\r\n    call CameraSetSmoothingFactor(0)\r\nendfunction",
        description: "",
    
    },
    DisplayTextToForce: {
        completion: "function DisplayTextToForce takes force toForce, string message returns nothing\r\n    if (IsPlayerInForce(GetLocalPlayer(), toForce)) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call DisplayTextToPlayer(GetLocalPlayer(), 0, 0, message)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'force', name: 'toForce', documentation: "a collection of players" },
            { label: 'string', name: 'message', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    DisplayTimedTextToForce: {
        completion: "function DisplayTimedTextToForce takes force toForce, real duration, string message returns nothing\r\n    if (IsPlayerInForce(GetLocalPlayer(), toForce)) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, duration, message)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'force', name: 'toForce', documentation: "a collection of players" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
            { label: 'string', name: 'message', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    ClearTextMessagesBJ: {
        completion: "function ClearTextMessagesBJ takes force toForce returns nothing\r\n    if (IsPlayerInForce(GetLocalPlayer(), toForce)) then\r\n        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n        call ClearTextMessages()\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'force', name: 'toForce', documentation: "a collection of players" },
      ],
    
    },
    SubStringBJ: {
        completion: "function SubStringBJ takes string source, integer start, integer end returns string\r\n    return SubString(source, start-1, end)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'string', name: 'source', documentation: "strings variables hold a series of characters" },
            { label: 'integer', name: 'start', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'end', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    TriggerRegisterTimerEventPeriodic: {
        completion: "function TriggerRegisterTimerEventPeriodic takes trigger trig, real timeout returns event\r\n    return TriggerRegisterTimerEvent(trig, timeout, true)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'real', name: 'timeout', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    TriggerRegisterTimerEventSingle: {
        completion: "function TriggerRegisterTimerEventSingle takes trigger trig, real timeout returns event\r\n    return TriggerRegisterTimerEvent(trig, timeout, false)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'real', name: 'timeout', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    TriggerRegisterTimerExpireEventBJ: {
        completion: "function TriggerRegisterTimerExpireEventBJ takes trigger trig, timer t returns event\r\n    return TriggerRegisterTimerExpireEvent(trig, t)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'timer', name: 't', documentation: "a timer reference" },
      ],
    
    },
    TriggerRegisterPlayerUnitEventSimple: {
        completion: "function TriggerRegisterPlayerUnitEventSimple takes trigger trig, player whichPlayer, playerunitevent whichEvent returns event\r\n    return TriggerRegisterPlayerUnitEvent(trig, whichPlayer, whichEvent, null)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'playerunitevent', name: 'whichEvent', documentation: "" },
      ],
    
    },
    TriggerRegisterAnyUnitEventBJ: {
        completion: "function TriggerRegisterAnyUnitEventBJ takes trigger trig, playerunitevent whichEvent returns nothing\r\n    local integer index\r\n\r\n    set index = 0\r\n    loop\r\n        call TriggerRegisterPlayerUnitEvent(trig, Player(index), whichEvent, null)\r\n\r\n        set index = index + 1\r\n        exitwhen index == bj_MAX_PLAYER_SLOTS\r\n    endloop\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'playerunitevent', name: 'whichEvent', documentation: "" },
      ],
    
    },
    TriggerRegisterPlayerSelectionEventBJ: {
        completion: "function TriggerRegisterPlayerSelectionEventBJ takes trigger trig, player whichPlayer, boolean selected returns event\r\n    if selected then\r\n        return TriggerRegisterPlayerUnitEvent(trig, whichPlayer, EVENT_PLAYER_UNIT_SELECTED, null)\r\n    else\r\n        return TriggerRegisterPlayerUnitEvent(trig, whichPlayer, EVENT_PLAYER_UNIT_DESELECTED, null)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'boolean', name: 'selected', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    TriggerRegisterPlayerKeyEventBJ: {
        completion: "function TriggerRegisterPlayerKeyEventBJ takes trigger trig, player whichPlayer, integer keType, integer keKey returns event\r\n    if (keType == bj_KEYEVENTTYPE_DEPRESS) then\r\n        // Depress event - find out what key\r\n        if (keKey == bj_KEYEVENTKEY_LEFT) then\r\n            return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_ARROW_LEFT_DOWN)\r\n        elseif (keKey == bj_KEYEVENTKEY_RIGHT) then\r\n            return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_ARROW_RIGHT_DOWN)\r\n        elseif (keKey == bj_KEYEVENTKEY_DOWN) then\r\n            return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_ARROW_DOWN_DOWN)\r\n        elseif (keKey == bj_KEYEVENTKEY_UP) then\r\n            return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_ARROW_UP_DOWN)\r\n        else\r\n            // Unrecognized key - ignore the request and return failure.\r\n            return null\r\n        endif\r\n    elseif (keType == bj_KEYEVENTTYPE_RELEASE) then\r\n        // Release event - find out what key\r\n        if (keKey == bj_KEYEVENTKEY_LEFT) then\r\n            return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_ARROW_LEFT_UP)\r\n        elseif (keKey == bj_KEYEVENTKEY_RIGHT) then\r\n            return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_ARROW_RIGHT_UP)\r\n        elseif (keKey == bj_KEYEVENTKEY_DOWN) then\r\n            return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_ARROW_DOWN_UP)\r\n        elseif (keKey == bj_KEYEVENTKEY_UP) then\r\n            return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_ARROW_UP_UP)\r\n        else\r\n            // Unrecognized key - ignore the request and return failure.\r\n            return null\r\n        endif\r\n    else\r\n        // Unrecognized type - ignore the request and return failure.\r\n        return null\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'integer', name: 'keType', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'keKey', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    TriggerRegisterPlayerEventVictory: {
        completion: "function TriggerRegisterPlayerEventVictory takes trigger trig, player whichPlayer returns event\r\n    return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_VICTORY)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    TriggerRegisterPlayerEventDefeat: {
        completion: "function TriggerRegisterPlayerEventDefeat takes trigger trig, player whichPlayer returns event\r\n    return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_DEFEAT)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    TriggerRegisterPlayerEventLeave: {
        completion: "function TriggerRegisterPlayerEventLeave takes trigger trig, player whichPlayer returns event\r\n    return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_LEAVE)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    TriggerRegisterPlayerEventAllianceChanged: {
        completion: "function TriggerRegisterPlayerEventAllianceChanged takes trigger trig, player whichPlayer returns event\r\n    return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_ALLIANCE_CHANGED)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    TriggerRegisterPlayerEventEndCinematic: {
        completion: "function TriggerRegisterPlayerEventEndCinematic takes trigger trig, player whichPlayer returns event\r\n    return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_END_CINEMATIC)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
      ],
    
    },
    TriggerRegisterGameStateEventTimeOfDay: {
        completion: "function TriggerRegisterGameStateEventTimeOfDay takes trigger trig, limitop opcode, real limitval returns event\r\n    return TriggerRegisterGameStateEvent(trig, GAME_STATE_TIME_OF_DAY, opcode, limitval)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'limitop', name: 'opcode', documentation: "" },
            { label: 'real', name: 'limitval', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    TriggerRegisterEnterRegionSimple: {
        completion: "function TriggerRegisterEnterRegionSimple takes trigger trig, region whichRegion returns event\r\n    return TriggerRegisterEnterRegion(trig, whichRegion, null)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'region', name: 'whichRegion', documentation: "" },
      ],
    
    },
    TriggerRegisterLeaveRegionSimple: {
        completion: "function TriggerRegisterLeaveRegionSimple takes trigger trig, region whichRegion returns event\r\n    return TriggerRegisterLeaveRegion(trig, whichRegion, null)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'region', name: 'whichRegion', documentation: "" },
      ],
    
    },
    TriggerRegisterEnterRectSimple: {
        completion: "function TriggerRegisterEnterRectSimple takes trigger trig, rect r returns event\r\n    local region rectRegion = CreateRegion()\r\n    call RegionAddRect(rectRegion, r)\r\n    return TriggerRegisterEnterRegion(trig, rectRegion, null)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'rect', name: 'r', documentation: "" },
      ],
    
    },
    TriggerRegisterLeaveRectSimple: {
        completion: "function TriggerRegisterLeaveRectSimple takes trigger trig, rect r returns event\r\n    local region rectRegion = CreateRegion()\r\n    call RegionAddRect(rectRegion, r)\r\n    return TriggerRegisterLeaveRegion(trig, rectRegion, null)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'rect', name: 'r', documentation: "" },
      ],
    
    },
    TriggerRegisterDistanceBetweenUnits: {
        completion: "function TriggerRegisterDistanceBetweenUnits takes trigger trig, unit whichUnit, boolexpr condition, real range returns event\r\n    return TriggerRegisterUnitInRange(trig, whichUnit, range, condition)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'boolexpr', name: 'condition', documentation: "" },
            { label: 'real', name: 'range', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    TriggerRegisterUnitInRangeSimple: {
        completion: "function TriggerRegisterUnitInRangeSimple takes trigger trig, real range, unit whichUnit returns event\r\n    return TriggerRegisterUnitInRange(trig, whichUnit, range, null)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'real', name: 'range', documentation: "real variables can hold rational numbers" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    TriggerRegisterUnitLifeEvent: {
        completion: "function TriggerRegisterUnitLifeEvent takes trigger trig, unit whichUnit, limitop opcode, real limitval returns event\r\n    return TriggerRegisterUnitStateEvent(trig, whichUnit, UNIT_STATE_LIFE, opcode, limitval)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'limitop', name: 'opcode', documentation: "" },
            { label: 'real', name: 'limitval', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    TriggerRegisterUnitManaEvent: {
        completion: "function TriggerRegisterUnitManaEvent takes trigger trig, unit whichUnit, limitop opcode, real limitval returns event\r\n    return TriggerRegisterUnitStateEvent(trig, whichUnit, UNIT_STATE_MANA, opcode, limitval)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
            { label: 'limitop', name: 'opcode', documentation: "" },
            { label: 'real', name: 'limitval', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    TriggerRegisterDialogEventBJ: {
        completion: "function TriggerRegisterDialogEventBJ takes trigger trig, dialog whichDialog returns event\r\n    return TriggerRegisterDialogEvent(trig, whichDialog)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
            { label: 'dialog', name: 'whichDialog', documentation: "" },
      ],
    
    },
    TriggerRegisterShowSkillEventBJ: {
        completion: "function TriggerRegisterShowSkillEventBJ takes trigger trig returns event\r\n    return TriggerRegisterGameEvent(trig, EVENT_GAME_SHOW_SKILL)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
      ],
    
    },
    TriggerRegisterBuildSubmenuEventBJ: {
        completion: "function TriggerRegisterBuildSubmenuEventBJ takes trigger trig returns event\r\n    return TriggerRegisterGameEvent(trig, EVENT_GAME_BUILD_SUBMENU)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
      ],
    
    },
    TriggerRegisterGameLoadedEventBJ: {
        completion: "function TriggerRegisterGameLoadedEventBJ takes trigger trig returns event\r\n    return TriggerRegisterGameEvent(trig, EVENT_GAME_LOADED)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
      ],
    
    },
    TriggerRegisterGameSavedEventBJ: {
        completion: "function TriggerRegisterGameSavedEventBJ takes trigger trig returns event\r\n    return TriggerRegisterGameEvent(trig, EVENT_GAME_SAVE)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'trigger', name: 'trig', documentation: "a trigger reference" },
      ],
    
    },
    RegisterDestDeathInRegionEnum: {
        completion: "function RegisterDestDeathInRegionEnum takes nothing returns nothing\r\n    set bj_destInRegionDiesCount = bj_destInRegionDiesCount + 1\r\n    if (bj_destInRegionDiesCount <= bj_MAX_DEST_IN_REGION_EVENTS) then\r\n        call TriggerRegisterDeathEvent(bj_destInRegionDiesTrig, GetEnumDestructable())\r\n    endif\r\nendfunction",
        description: "",
    
    },
    AddWeatherEffectSaveLast: {
        completion: "function AddWeatherEffectSaveLast takes rect where, integer effectID returns weathereffect\r\n    set bj_lastCreatedWeatherEffect = AddWeatherEffect(where, effectID)\r\n    return bj_lastCreatedWeatherEffect\r\nendfunction",
        description: "",
        parameters: [
            { label: 'rect', name: 'where', documentation: "" },
            { label: 'integer', name: 'effectID', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetLastCreatedWeatherEffect: {
        completion: "function GetLastCreatedWeatherEffect takes nothing returns weathereffect\r\n    return bj_lastCreatedWeatherEffect\r\nendfunction",
        description: "",
    
    },
    RemoveWeatherEffectBJ: {
        completion: "function RemoveWeatherEffectBJ takes weathereffect whichWeatherEffect returns nothing\r\n    call RemoveWeatherEffect(whichWeatherEffect)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'weathereffect', name: 'whichWeatherEffect', documentation: "" },
      ],
    
    },
    TerrainDeformationCraterBJ: {
        completion: "function TerrainDeformationCraterBJ takes real duration, boolean permanent, location where, real radius, real depth returns terraindeformation\r\n    set bj_lastCreatedTerrainDeformation = TerrainDeformCrater(GetLocationX(where), GetLocationY(where), radius, depth, R2I(duration * 1000), permanent)\r\n    return bj_lastCreatedTerrainDeformation\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'permanent', documentation: "boolean variables can take the values true of false" },
            { label: 'location', name: 'where', documentation: "" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'depth', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    TerrainDeformationRippleBJ: {
        completion: "function TerrainDeformationRippleBJ takes real duration, boolean limitNeg, location where, real startRadius, real endRadius, real depth, real wavePeriod, real waveWidth returns terraindeformation\r\n    local real spaceWave\r\n    local real timeWave\r\n    local real radiusRatio\r\n\r\n    if (endRadius <= 0 or waveWidth <= 0 or wavePeriod <= 0) then\r\n        return null\r\n    endif\r\n\r\n    set timeWave = 2.0 * duration / wavePeriod\r\n    set spaceWave = 2.0 * endRadius / waveWidth\r\n    set radiusRatio = startRadius / endRadius\r\n\r\n    set bj_lastCreatedTerrainDeformation = TerrainDeformRipple(GetLocationX(where), GetLocationY(where), endRadius, depth, R2I(duration * 1000), 1, spaceWave, timeWave, radiusRatio, limitNeg)\r\n    return bj_lastCreatedTerrainDeformation\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'limitNeg', documentation: "boolean variables can take the values true of false" },
            { label: 'location', name: 'where', documentation: "" },
            { label: 'real', name: 'startRadius', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'endRadius', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'depth', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'wavePeriod', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'waveWidth', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    TerrainDeformationWaveBJ: {
        completion: "function TerrainDeformationWaveBJ takes real duration, location source, location target, real radius, real depth, real trailDelay returns terraindeformation\r\n    local real distance\r\n    local real dirX\r\n    local real dirY\r\n    local real speed\r\n\r\n    set distance = DistanceBetweenPoints(source, target)\r\n    if (distance == 0 or duration <= 0) then\r\n        return null\r\n    endif\r\n\r\n    set dirX = (GetLocationX(target) - GetLocationX(source)) / distance\r\n    set dirY = (GetLocationY(target) - GetLocationY(source)) / distance\r\n    set speed = distance / duration\r\n\r\n    set bj_lastCreatedTerrainDeformation = TerrainDeformWave(GetLocationX(source), GetLocationY(source), dirX, dirY, distance, speed, radius, depth, R2I(trailDelay * 1000), 1)\r\n    return bj_lastCreatedTerrainDeformation\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
            { label: 'location', name: 'source', documentation: "" },
            { label: 'location', name: 'target', documentation: "" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'depth', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'trailDelay', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    TerrainDeformationRandomBJ: {
        completion: "function TerrainDeformationRandomBJ takes real duration, location where, real radius, real minDelta, real maxDelta, real updateInterval returns terraindeformation\r\n    set bj_lastCreatedTerrainDeformation = TerrainDeformRandom(GetLocationX(where), GetLocationY(where), radius, minDelta, maxDelta, R2I(duration * 1000), R2I(updateInterval * 1000))\r\n    return bj_lastCreatedTerrainDeformation\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
            { label: 'location', name: 'where', documentation: "" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'minDelta', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'maxDelta', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'updateInterval', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    TerrainDeformationStopBJ: {
        completion: "function TerrainDeformationStopBJ takes terraindeformation deformation, real duration returns nothing\r\n    call TerrainDeformStop(deformation, R2I(duration * 1000))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'terraindeformation', name: 'deformation', documentation: "" },
            { label: 'real', name: 'duration', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetLastCreatedTerrainDeformation: {
        completion: "function GetLastCreatedTerrainDeformation takes nothing returns terraindeformation\r\n    return bj_lastCreatedTerrainDeformation\r\nendfunction",
        description: "",
    
    },
    AddLightningLoc: {
        completion: "function AddLightningLoc takes string codeName, location where1, location where2 returns lightning\r\n    set bj_lastCreatedLightning = AddLightningEx(codeName, true, GetLocationX(where1), GetLocationY(where1), GetLocationZ(where1), GetLocationX(where2), GetLocationY(where2), GetLocationZ(where2))\r\n    return bj_lastCreatedLightning\r\nendfunction",
        description: "",
        parameters: [
            { label: 'string', name: 'codeName', documentation: "strings variables hold a series of characters" },
            { label: 'location', name: 'where1', documentation: "" },
            { label: 'location', name: 'where2', documentation: "" },
      ],
    
    },
    DestroyLightningBJ: {
        completion: "function DestroyLightningBJ takes lightning whichBolt returns boolean\r\n    return DestroyLightning(whichBolt)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'lightning', name: 'whichBolt', documentation: "" },
      ],
    
    },
    MoveLightningLoc: {
        completion: "function MoveLightningLoc takes lightning whichBolt, location where1, location where2 returns boolean\r\n    return MoveLightningEx(whichBolt, true, GetLocationX(where1), GetLocationY(where1), GetLocationZ(where1), GetLocationX(where2), GetLocationY(where2), GetLocationZ(where2))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'lightning', name: 'whichBolt', documentation: "" },
            { label: 'location', name: 'where1', documentation: "" },
            { label: 'location', name: 'where2', documentation: "" },
      ],
    
    },
    GetLightningColorABJ: {
        completion: "function GetLightningColorABJ takes lightning whichBolt returns real\r\n    return GetLightningColorA(whichBolt)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'lightning', name: 'whichBolt', documentation: "" },
      ],
    
    },
    GetLightningColorRBJ: {
        completion: "function GetLightningColorRBJ takes lightning whichBolt returns real\r\n    return GetLightningColorR(whichBolt)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'lightning', name: 'whichBolt', documentation: "" },
      ],
    
    },
    GetLightningColorGBJ: {
        completion: "function GetLightningColorGBJ takes lightning whichBolt returns real\r\n    return GetLightningColorG(whichBolt)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'lightning', name: 'whichBolt', documentation: "" },
      ],
    
    },
    GetLightningColorBBJ: {
        completion: "function GetLightningColorBBJ takes lightning whichBolt returns real\r\n    return GetLightningColorB(whichBolt)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'lightning', name: 'whichBolt', documentation: "" },
      ],
    
    },
    SetLightningColorBJ: {
        completion: "function SetLightningColorBJ takes lightning whichBolt, real r, real g, real b, real a returns boolean\r\n    return SetLightningColor(whichBolt, r, g, b, a)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'lightning', name: 'whichBolt', documentation: "" },
            { label: 'real', name: 'r', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'g', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'b', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'a', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetLastCreatedLightningBJ: {
        completion: "function GetLastCreatedLightningBJ takes nothing returns lightning\r\n    return bj_lastCreatedLightning\r\nendfunction",
        description: "",
    
    },
    GetAbilityEffectBJ: {
        completion: "function GetAbilityEffectBJ takes integer abilcode, effecttype t, integer index returns string\r\n    return GetAbilityEffectById(abilcode, t, index)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilcode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'effecttype', name: 't', documentation: "" },
            { label: 'integer', name: 'index', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    GetAbilitySoundBJ: {
        completion: "function GetAbilitySoundBJ takes integer abilcode, soundtype t returns string\r\n    return GetAbilitySoundById(abilcode, t)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'integer', name: 'abilcode', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'soundtype', name: 't', documentation: "" },
      ],
    
    },
    GetTerrainCliffLevelBJ: {
        completion: "function GetTerrainCliffLevelBJ takes location where returns integer\r\n    return GetTerrainCliffLevel(GetLocationX(where), GetLocationY(where))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'location', name: 'where', documentation: "" },
      ],
    
    },
    GetTerrainTypeBJ: {
        completion: "function GetTerrainTypeBJ takes location where returns integer\r\n    return GetTerrainType(GetLocationX(where), GetLocationY(where))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'location', name: 'where', documentation: "" },
      ],
    
    },
    GetTerrainVarianceBJ: {
        completion: "function GetTerrainVarianceBJ takes location where returns integer\r\n    return GetTerrainVariance(GetLocationX(where), GetLocationY(where))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'location', name: 'where', documentation: "" },
      ],
    
    },
    SetTerrainTypeBJ: {
        completion: "function SetTerrainTypeBJ takes location where, integer terrainType, integer variation, integer area, integer shape returns nothing\r\n    call SetTerrainType(GetLocationX(where), GetLocationY(where), terrainType, variation, area, shape)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'location', name: 'where', documentation: "" },
            { label: 'integer', name: 'terrainType', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'variation', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'area', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'integer', name: 'shape', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    IsTerrainPathableBJ: {
        completion: "function IsTerrainPathableBJ takes location where, pathingtype t returns boolean\r\n    return IsTerrainPathable(GetLocationX(where), GetLocationY(where), t)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'location', name: 'where', documentation: "" },
            { label: 'pathingtype', name: 't', documentation: "" },
      ],
    
    },
    SetTerrainPathableBJ: {
        completion: "function SetTerrainPathableBJ takes location where, pathingtype t, boolean flag returns nothing\r\n    call SetTerrainPathable(GetLocationX(where), GetLocationY(where), t, flag)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'location', name: 'where', documentation: "" },
            { label: 'pathingtype', name: 't', documentation: "" },
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetWaterBaseColorBJ: {
        completion: "function SetWaterBaseColorBJ takes real red, real green, real blue, real transparency returns nothing\r\n    call SetWaterBaseColor(PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100.0-transparency))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'red', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'green', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'blue', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'transparency', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    CreateFogModifierRectSimple: {
        completion: "function CreateFogModifierRectSimple takes player whichPlayer, fogstate whichFogState, rect r, boolean afterUnits returns fogmodifier\r\n    set bj_lastCreatedFogModifier = CreateFogModifierRect(whichPlayer, whichFogState, r, true, afterUnits)\r\n    return bj_lastCreatedFogModifier\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'fogstate', name: 'whichFogState', documentation: "" },
            { label: 'rect', name: 'r', documentation: "" },
            { label: 'boolean', name: 'afterUnits', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    CreateFogModifierRadiusLocSimple: {
        completion: "function CreateFogModifierRadiusLocSimple takes player whichPlayer, fogstate whichFogState, location center, real radius, boolean afterUnits returns fogmodifier\r\n    set bj_lastCreatedFogModifier = CreateFogModifierRadiusLoc(whichPlayer, whichFogState, center, radius, true, afterUnits)\r\n    return bj_lastCreatedFogModifier\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'fogstate', name: 'whichFogState', documentation: "" },
            { label: 'location', name: 'center', documentation: "" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'afterUnits', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    CreateFogModifierRectBJ: {
        completion: "function CreateFogModifierRectBJ takes boolean enabled, player whichPlayer, fogstate whichFogState, rect r returns fogmodifier\r\n    set bj_lastCreatedFogModifier = CreateFogModifierRect(whichPlayer, whichFogState, r, true, false)\r\n    if enabled then\r\n        call FogModifierStart(bj_lastCreatedFogModifier)\r\n    endif\r\n    return bj_lastCreatedFogModifier\r\nendfunction",
        description: "",
        parameters: [
            { label: 'boolean', name: 'enabled', documentation: "boolean variables can take the values true of false" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'fogstate', name: 'whichFogState', documentation: "" },
            { label: 'rect', name: 'r', documentation: "" },
      ],
    
    },
    CreateFogModifierRadiusLocBJ: {
        completion: "function CreateFogModifierRadiusLocBJ takes boolean enabled, player whichPlayer, fogstate whichFogState, location center, real radius returns fogmodifier\r\n    set bj_lastCreatedFogModifier = CreateFogModifierRadiusLoc(whichPlayer, whichFogState, center, radius, true, false)\r\n    if enabled then\r\n        call FogModifierStart(bj_lastCreatedFogModifier)\r\n    endif\r\n    return bj_lastCreatedFogModifier\r\nendfunction",
        description: "",
        parameters: [
            { label: 'boolean', name: 'enabled', documentation: "boolean variables can take the values true of false" },
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'fogstate', name: 'whichFogState', documentation: "" },
            { label: 'location', name: 'center', documentation: "" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetLastCreatedFogModifier: {
        completion: "function GetLastCreatedFogModifier takes nothing returns fogmodifier\r\n    return bj_lastCreatedFogModifier\r\nendfunction",
        description: "",
    
    },
    FogEnableOn: {
        completion: "function FogEnableOn takes nothing returns nothing\r\n    call FogEnable(true)\r\nendfunction",
        description: "",
    
    },
    FogEnableOff: {
        completion: "function FogEnableOff takes nothing returns nothing\r\n    call FogEnable(false)\r\nendfunction",
        description: "",
    
    },
    FogMaskEnableOn: {
        completion: "function FogMaskEnableOn takes nothing returns nothing\r\n    call FogMaskEnable(true)\r\nendfunction",
        description: "",
    
    },
    FogMaskEnableOff: {
        completion: "function FogMaskEnableOff takes nothing returns nothing\r\n    call FogMaskEnable(false)\r\nendfunction",
        description: "",
    
    },
    UseTimeOfDayBJ: {
        completion: "function UseTimeOfDayBJ takes boolean flag returns nothing\r\n    call SuspendTimeOfDay(not flag)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetTerrainFogExBJ: {
        completion: "function SetTerrainFogExBJ takes integer style, real zstart, real zend, real density, real red, real green, real blue returns nothing\r\n    call SetTerrainFogEx(style, zstart, zend, density, red * 0.01, green * 0.01, blue * 0.01)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'integer', name: 'style', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'zstart', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'zend', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'density', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'red', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'green', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'blue', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    ResetTerrainFogBJ: {
        completion: "function ResetTerrainFogBJ takes nothing returns nothing\r\n    call ResetTerrainFog()\r\nendfunction",
        description: "",
    
    },
    SetDoodadAnimationBJ: {
        completion: "function SetDoodadAnimationBJ takes string animName, integer doodadID, real radius, location center returns nothing\r\n    call SetDoodadAnimation(GetLocationX(center), GetLocationY(center), radius, doodadID, false, animName, false)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'string', name: 'animName', documentation: "strings variables hold a series of characters" },
            { label: 'integer', name: 'doodadID', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'real', name: 'radius', documentation: "real variables can hold rational numbers" },
            { label: 'location', name: 'center', documentation: "" },
      ],
    
    },
    SetDoodadAnimationRectBJ: {
        completion: "function SetDoodadAnimationRectBJ takes string animName, integer doodadID, rect r returns nothing\r\n    call SetDoodadAnimationRect(r, doodadID, animName, false)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'string', name: 'animName', documentation: "strings variables hold a series of characters" },
            { label: 'integer', name: 'doodadID', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
            { label: 'rect', name: 'r', documentation: "" },
      ],
    
    },
    AddUnitAnimationPropertiesBJ: {
        completion: "function AddUnitAnimationPropertiesBJ takes boolean add, string animProperties, unit whichUnit returns nothing\r\n    call AddUnitAnimationProperties(whichUnit, animProperties, add)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'boolean', name: 'add', documentation: "boolean variables can take the values true of false" },
            { label: 'string', name: 'animProperties', documentation: "strings variables hold a series of characters" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    CreateImageBJ: {
        completion: "function CreateImageBJ takes string file, real size, location where, real zOffset, integer imageType returns image\r\n    set bj_lastCreatedImage = CreateImage(file, size, size, size, GetLocationX(where), GetLocationY(where), zOffset, 0, 0, 0, imageType)\r\n    return bj_lastCreatedImage\r\nendfunction",
        description: "",
        parameters: [
            { label: 'string', name: 'file', documentation: "strings variables hold a series of characters" },
            { label: 'real', name: 'size', documentation: "real variables can hold rational numbers" },
            { label: 'location', name: 'where', documentation: "" },
            { label: 'real', name: 'zOffset', documentation: "real variables can hold rational numbers" },
            { label: 'integer', name: 'imageType', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    ShowImageBJ: {
        completion: "function ShowImageBJ takes boolean flag, image whichImage returns nothing\r\n    call ShowImage(whichImage, flag)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
            { label: 'image', name: 'whichImage', documentation: "" },
      ],
    
    },
    SetImagePositionBJ: {
        completion: "function SetImagePositionBJ takes image whichImage, location where, real zOffset returns nothing\r\n    call SetImagePosition(whichImage, GetLocationX(where), GetLocationY(where), zOffset)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'image', name: 'whichImage', documentation: "" },
            { label: 'location', name: 'where', documentation: "" },
            { label: 'real', name: 'zOffset', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetImageColorBJ: {
        completion: "function SetImageColorBJ takes image whichImage, real red, real green, real blue, real alpha returns nothing\r\n    call SetImageColor(whichImage, PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100.0-alpha))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'image', name: 'whichImage', documentation: "" },
            { label: 'real', name: 'red', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'green', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'blue', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'alpha', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetLastCreatedImage: {
        completion: "function GetLastCreatedImage takes nothing returns image\r\n    return bj_lastCreatedImage\r\nendfunction",
        description: "",
    
    },
    CreateUbersplatBJ: {
        completion: "function CreateUbersplatBJ takes location where, string name, real red, real green, real blue, real alpha, boolean forcePaused, boolean noBirthTime returns ubersplat\r\n    set bj_lastCreatedUbersplat = CreateUbersplat(GetLocationX(where), GetLocationY(where), name, PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100.0-alpha), forcePaused, noBirthTime)\r\n    return bj_lastCreatedUbersplat\r\nendfunction",
        description: "",
        parameters: [
            { label: 'location', name: 'where', documentation: "" },
            { label: 'string', name: 'name', documentation: "strings variables hold a series of characters" },
            { label: 'real', name: 'red', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'green', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'blue', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'alpha', documentation: "real variables can hold rational numbers" },
            { label: 'boolean', name: 'forcePaused', documentation: "boolean variables can take the values true of false" },
            { label: 'boolean', name: 'noBirthTime', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    ShowUbersplatBJ: {
        completion: "function ShowUbersplatBJ takes boolean flag, ubersplat whichSplat returns nothing\r\n    call ShowUbersplat(whichSplat, flag)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
            { label: 'ubersplat', name: 'whichSplat', documentation: "" },
      ],
    
    },
    GetLastCreatedUbersplat: {
        completion: "function GetLastCreatedUbersplat takes nothing returns ubersplat\r\n    return bj_lastCreatedUbersplat\r\nendfunction",
        description: "",
    
    },
    PlaySoundBJ: {
        completion: "function PlaySoundBJ takes sound soundHandle returns nothing\r\n    set bj_lastPlayedSound = soundHandle\r\n    if (soundHandle != null) then\r\n        call StartSound(soundHandle)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
      ],
    
    },
    StopSoundBJ: {
        completion: "function StopSoundBJ takes sound soundHandle, boolean fadeOut returns nothing\r\n    call StopSound(soundHandle, false, fadeOut)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'boolean', name: 'fadeOut', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    SetSoundVolumeBJ: {
        completion: "function SetSoundVolumeBJ takes sound soundHandle, real volumePercent returns nothing\r\n    call SetSoundVolume(soundHandle, PercentToInt(volumePercent, 127))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'real', name: 'volumePercent', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetSoundOffsetBJ: {
        completion: "function SetSoundOffsetBJ takes real newOffset, sound soundHandle returns nothing\r\n    call SetSoundPlayPosition(soundHandle, R2I(newOffset * 1000))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'newOffset', documentation: "real variables can hold rational numbers" },
            { label: 'sound', name: 'soundHandle', documentation: "" },
      ],
    
    },
    SetSoundDistanceCutoffBJ: {
        completion: "function SetSoundDistanceCutoffBJ takes sound soundHandle, real cutoff returns nothing\r\n    call SetSoundDistanceCutoff(soundHandle, cutoff)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'real', name: 'cutoff', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetSoundPitchBJ: {
        completion: "function SetSoundPitchBJ takes sound soundHandle, real pitch returns nothing\r\n    call SetSoundPitch(soundHandle, pitch)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'real', name: 'pitch', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetSoundPositionLocBJ: {
        completion: "function SetSoundPositionLocBJ takes sound soundHandle, location loc, real z returns nothing\r\n    call SetSoundPosition(soundHandle, GetLocationX(loc), GetLocationY(loc), z)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'location', name: 'loc', documentation: "" },
            { label: 'real', name: 'z', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    AttachSoundToUnitBJ: {
        completion: "function AttachSoundToUnitBJ takes sound soundHandle, unit whichUnit returns nothing\r\n    call AttachSoundToUnit(soundHandle, whichUnit)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    SetSoundConeAnglesBJ: {
        completion: "function SetSoundConeAnglesBJ takes sound soundHandle, real inside, real outside, real outsideVolumePercent returns nothing\r\n    call SetSoundConeAngles(soundHandle, inside, outside, PercentToInt(outsideVolumePercent, 127))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'real', name: 'inside', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'outside', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'outsideVolumePercent', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    KillSoundWhenDoneBJ: {
        completion: "function KillSoundWhenDoneBJ takes sound soundHandle returns nothing\r\n    call KillSoundWhenDone(soundHandle)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
      ],
    
    },
    PlaySoundAtPointBJ: {
        completion: "function PlaySoundAtPointBJ takes sound soundHandle, real volumePercent, location loc, real z returns nothing\r\n    call SetSoundPositionLocBJ(soundHandle, loc, z)\r\n    call SetSoundVolumeBJ(soundHandle, volumePercent)\r\n    call PlaySoundBJ(soundHandle)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'real', name: 'volumePercent', documentation: "real variables can hold rational numbers" },
            { label: 'location', name: 'loc', documentation: "" },
            { label: 'real', name: 'z', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    PlaySoundOnUnitBJ: {
        completion: "function PlaySoundOnUnitBJ takes sound soundHandle, real volumePercent, unit whichUnit returns nothing\r\n    call AttachSoundToUnitBJ(soundHandle, whichUnit)\r\n    call SetSoundVolumeBJ(soundHandle, volumePercent)\r\n    call PlaySoundBJ(soundHandle)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'real', name: 'volumePercent', documentation: "real variables can hold rational numbers" },
            { label: 'unit', name: 'whichUnit', documentation: "a single unit reference" },
      ],
    
    },
    PlaySoundFromOffsetBJ: {
        completion: "function PlaySoundFromOffsetBJ takes sound soundHandle, real volumePercent, real startingOffset returns nothing\r\n    call SetSoundVolumeBJ(soundHandle, volumePercent)\r\n    call PlaySoundBJ(soundHandle)\r\n    call SetSoundOffsetBJ(startingOffset, soundHandle)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'real', name: 'volumePercent', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'startingOffset', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    PlayMusicBJ: {
        completion: "function PlayMusicBJ takes string musicFileName returns nothing\r\n    set bj_lastPlayedMusic = musicFileName\r\n    call PlayMusic(musicFileName)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'string', name: 'musicFileName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    PlayMusicExBJ: {
        completion: "function PlayMusicExBJ takes string musicFileName, real startingOffset, real fadeInTime returns nothing\r\n    set bj_lastPlayedMusic = musicFileName\r\n    call PlayMusicEx(musicFileName, R2I(startingOffset * 1000), R2I(fadeInTime * 1000))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'string', name: 'musicFileName', documentation: "strings variables hold a series of characters" },
            { label: 'real', name: 'startingOffset', documentation: "real variables can hold rational numbers" },
            { label: 'real', name: 'fadeInTime', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetMusicOffsetBJ: {
        completion: "function SetMusicOffsetBJ takes real newOffset returns nothing\r\n    call SetMusicPlayPosition(R2I(newOffset * 1000))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'newOffset', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    PlayThematicMusicBJ: {
        completion: "function PlayThematicMusicBJ takes string musicName returns nothing\r\n    call PlayThematicMusic(musicName)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'string', name: 'musicName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    PlayThematicMusicExBJ: {
        completion: "function PlayThematicMusicExBJ takes string musicName, real startingOffset returns nothing\r\n    call PlayThematicMusicEx(musicName, R2I(startingOffset * 1000))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'string', name: 'musicName', documentation: "strings variables hold a series of characters" },
            { label: 'real', name: 'startingOffset', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetThematicMusicOffsetBJ: {
        completion: "function SetThematicMusicOffsetBJ takes real newOffset returns nothing\r\n    call SetThematicMusicPlayPosition(R2I(newOffset * 1000))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'newOffset', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    EndThematicMusicBJ: {
        completion: "function EndThematicMusicBJ takes nothing returns nothing\r\n    call EndThematicMusic()\r\nendfunction",
        description: "",
    
    },
    StopMusicBJ: {
        completion: "function StopMusicBJ takes boolean fadeOut returns nothing\r\n    call StopMusic(fadeOut)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'boolean', name: 'fadeOut', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    ResumeMusicBJ: {
        completion: "function ResumeMusicBJ takes nothing returns nothing\r\n    call ResumeMusic()\r\nendfunction",
        description: "",
    
    },
    SetMusicVolumeBJ: {
        completion: "function SetMusicVolumeBJ takes real volumePercent returns nothing\r\n    call SetMusicVolume(PercentToInt(volumePercent, 127))\r\nendfunction",
        description: "",
        parameters: [
            { label: 'real', name: 'volumePercent', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    GetSoundDurationBJ: {
        completion: "function GetSoundDurationBJ takes sound soundHandle returns real\r\n    if (soundHandle == null) then\r\n        return bj_NOTHING_SOUND_DURATION\r\n    else\r\n        return I2R(GetSoundDuration(soundHandle)) * 0.001\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
      ],
    
    },
    GetSoundFileDurationBJ: {
        completion: "function GetSoundFileDurationBJ takes string musicFileName returns real\r\n    return I2R(GetSoundFileDuration(musicFileName)) * 0.001\r\nendfunction",
        description: "",
        parameters: [
            { label: 'string', name: 'musicFileName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    GetLastPlayedSound: {
        completion: "function GetLastPlayedSound takes nothing returns sound\r\n    return bj_lastPlayedSound\r\nendfunction",
        description: "",
    
    },
    GetLastPlayedMusic: {
        completion: "function GetLastPlayedMusic takes nothing returns string\r\n    return bj_lastPlayedMusic\r\nendfunction",
        description: "",
    
    },
    VolumeGroupSetVolumeBJ: {
        completion: "function VolumeGroupSetVolumeBJ takes volumegroup vgroup, real percent returns nothing\r\n    call VolumeGroupSetVolume(vgroup, percent * 0.01)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'volumegroup', name: 'vgroup', documentation: "" },
            { label: 'real', name: 'percent', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetCineModeVolumeGroupsImmediateBJ: {
        completion: "function SetCineModeVolumeGroupsImmediateBJ takes nothing returns nothing\r\n    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_UNITMOVEMENT,  bj_CINEMODE_VOLUME_UNITMOVEMENT)\r\n    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_UNITSOUNDS,    bj_CINEMODE_VOLUME_UNITSOUNDS)\r\n    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_COMBAT,        bj_CINEMODE_VOLUME_COMBAT)\r\n    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_SPELLS,        bj_CINEMODE_VOLUME_SPELLS)\r\n    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_UI,            bj_CINEMODE_VOLUME_UI)\r\n    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_MUSIC,         bj_CINEMODE_VOLUME_MUSIC)\r\n    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_AMBIENTSOUNDS, bj_CINEMODE_VOLUME_AMBIENTSOUNDS)\r\n    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_FIRE,          bj_CINEMODE_VOLUME_FIRE)\r\nendfunction",
        description: "",
    
    },
    SetCineModeVolumeGroupsBJ: {
        completion: "function SetCineModeVolumeGroupsBJ takes nothing returns nothing\r\n    // Delay the request if it occurs at map init.\r\n    if bj_gameStarted then\r\n        call SetCineModeVolumeGroupsImmediateBJ()\r\n    else\r\n        call TimerStart(bj_volumeGroupsTimer, bj_GAME_STARTED_THRESHOLD, false, function SetCineModeVolumeGroupsImmediateBJ)\r\n    endif\r\nendfunction",
        description: "",
    
    },
    SetSpeechVolumeGroupsImmediateBJ: {
        completion: "function SetSpeechVolumeGroupsImmediateBJ takes nothing returns nothing\r\n    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_UNITMOVEMENT,  bj_SPEECH_VOLUME_UNITMOVEMENT)\r\n    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_UNITSOUNDS,    bj_SPEECH_VOLUME_UNITSOUNDS)\r\n    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_COMBAT,        bj_SPEECH_VOLUME_COMBAT)\r\n    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_SPELLS,        bj_SPEECH_VOLUME_SPELLS)\r\n    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_UI,            bj_SPEECH_VOLUME_UI)\r\n    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_MUSIC,         bj_SPEECH_VOLUME_MUSIC)\r\n    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_AMBIENTSOUNDS, bj_SPEECH_VOLUME_AMBIENTSOUNDS)\r\n    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_FIRE,          bj_SPEECH_VOLUME_FIRE)\r\nendfunction",
        description: "",
    
    },
    SetSpeechVolumeGroupsBJ: {
        completion: "function SetSpeechVolumeGroupsBJ takes nothing returns nothing\r\n    // Delay the request if it occurs at map init.\r\n    if bj_gameStarted then\r\n        call SetSpeechVolumeGroupsImmediateBJ()\r\n    else\r\n        call TimerStart(bj_volumeGroupsTimer, bj_GAME_STARTED_THRESHOLD, false, function SetSpeechVolumeGroupsImmediateBJ)\r\n    endif\r\nendfunction",
        description: "",
    
    },
    VolumeGroupResetImmediateBJ: {
        completion: "function VolumeGroupResetImmediateBJ takes nothing returns nothing\r\n    call VolumeGroupReset()\r\nendfunction",
        description: "",
    
    },
    VolumeGroupResetBJ: {
        completion: "function VolumeGroupResetBJ takes nothing returns nothing\r\n    // Delay the request if it occurs at map init.\r\n    if bj_gameStarted then\r\n        call VolumeGroupResetImmediateBJ()\r\n    else\r\n        call TimerStart(bj_volumeGroupsTimer, bj_GAME_STARTED_THRESHOLD, false, function VolumeGroupResetImmediateBJ)\r\n    endif\r\nendfunction",
        description: "",
    
    },
    GetSoundIsPlayingBJ: {
        completion: "function GetSoundIsPlayingBJ takes sound soundHandle returns boolean\r\n    return GetSoundIsLoading(soundHandle) or GetSoundIsPlaying(soundHandle)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
      ],
    
    },
    WaitForSoundBJ: {
        completion: "function WaitForSoundBJ takes sound soundHandle, real offset returns nothing\r\n    call TriggerWaitForSound( soundHandle, offset )\r\nendfunction",
        description: "",
        parameters: [
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'real', name: 'offset', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    SetMapMusicIndexedBJ: {
        completion: "function SetMapMusicIndexedBJ takes string musicName, integer index returns nothing\r\n    call SetMapMusic(musicName, false, index)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'string', name: 'musicName', documentation: "strings variables hold a series of characters" },
            { label: 'integer', name: 'index', documentation: "integer variables can hold the range of integral numbers ranging from -2147483647 to 2147483647" },
      ],
    
    },
    SetMapMusicRandomBJ: {
        completion: "function SetMapMusicRandomBJ takes string musicName returns nothing\r\n    call SetMapMusic(musicName, true, 0)\r\nendfunction",
        description: "",
        parameters: [
            { label: 'string', name: 'musicName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    ClearMapMusicBJ: {
        completion: "function ClearMapMusicBJ takes nothing returns nothing\r\n    call ClearMapMusic()\r\nendfunction",
        description: "",
    
    },
    SetStackedSoundBJ: {
        completion: "function SetStackedSoundBJ takes boolean add, sound soundHandle, rect r returns nothing\r\n    local real width = GetRectMaxX(r) - GetRectMinX(r)\r\n    local real height = GetRectMaxY(r) - GetRectMinY(r)\r\n\r\n    call SetSoundPosition(soundHandle, GetRectCenterX(r), GetRectCenterY(r), 0)\r\n    if add then\r\n        call RegisterStackedSound(soundHandle, true, width, height)\r\n    else\r\n        call UnregisterStackedSound(soundHandle, true, width, height)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'boolean', name: 'add', documentation: "boolean variables can take the values true of false" },
            { label: 'sound', name: 'soundHandle', documentation: "" },
            { label: 'rect', name: 'r', documentation: "" },
      ],
    
    },
    StartSoundForPlayerBJ: {
        completion: "function StartSoundForPlayerBJ takes player whichPlayer, sound soundHandle returns nothing\r\n    if (whichPlayer == GetLocalPlayer()) then\r\n        call StartSound(soundHandle)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'sound', name: 'soundHandle', documentation: "" },
      ],
    
    },
    VolumeGroupSetVolumeForPlayerBJ: {
        completion: "function VolumeGroupSetVolumeForPlayerBJ takes player whichPlayer, volumegroup vgroup, real scale returns nothing\r\n    if (GetLocalPlayer() == whichPlayer) then\r\n        call VolumeGroupSetVolume(vgroup, scale)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'player', name: 'whichPlayer', documentation: "a single player reference" },
            { label: 'volumegroup', name: 'vgroup', documentation: "" },
            { label: 'real', name: 'scale', documentation: "real variables can hold rational numbers" },
      ],
    
    },
    EnableDawnDusk: {
        completion: "function EnableDawnDusk takes boolean flag returns nothing\r\n    set bj_useDawnDuskSounds = flag\r\nendfunction",
        description: "",
        parameters: [
            { label: 'boolean', name: 'flag', documentation: "boolean variables can take the values true of false" },
      ],
    
    },
    IsDawnDuskEnabled: {
        completion: "function IsDawnDuskEnabled takes nothing returns boolean\r\n    return bj_useDawnDuskSounds\r\nendfunction",
        description: "",
    
    },
    SetAmbientDaySound: {
        completion: "function SetAmbientDaySound takes string inLabel returns nothing\r\n    local real ToD\r\n\r\n    // Stop old sound, if necessary\r\n    if (bj_dayAmbientSound != null) then\r\n        call StopSound(bj_dayAmbientSound, true, true)\r\n    endif\r\n\r\n    // Create new sound\r\n    set bj_dayAmbientSound = CreateMIDISound(inLabel, 20, 20)\r\n\r\n    // Start the sound if necessary, based on current time\r\n    set ToD = GetTimeOfDay()\r\n    if (ToD >= bj_TOD_DAWN and ToD < bj_TOD_DUSK) then\r\n        call StartSound(bj_dayAmbientSound)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'string', name: 'inLabel', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    SetAmbientNightSound: {
        completion: "function SetAmbientNightSound takes string inLabel returns nothing\r\n    local real ToD\r\n\r\n    // Stop old sound, if necessary\r\n    if (bj_nightAmbientSound != null) then\r\n        call StopSound(bj_nightAmbientSound, true, true)\r\n    endif\r\n\r\n    // Create new sound\r\n    set bj_nightAmbientSound = CreateMIDISound(inLabel, 20, 20)\r\n\r\n    // Start the sound if necessary, based on current time\r\n    set ToD = GetTimeOfDay()\r\n    if (ToD < bj_TOD_DAWN or ToD >= bj_TOD_DUSK) then\r\n        call StartSound(bj_nightAmbientSound)\r\n    endif\r\nendfunction",
        description: "",
        parameters: [
            { label: 'string', name: 'inLabel', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    AddSpecialEffectLocBJ: {
        completion: "function AddSpecialEffectLocBJ takes location where, string modelName returns effect\r\n    set bj_lastCreatedEffect = AddSpecialEffectLoc(modelName, where)\r\n    return bj_lastCreatedEffect\r\nendfunction",
        description: "",
        parameters: [
            { label: 'location', name: 'where', documentation: "" },
            { label: 'string', name: 'modelName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    AddSpecialEffectTargetUnitBJ: {
        completion: "function AddSpecialEffectTargetUnitBJ takes string attachPointName, widget targetWidget, string modelName returns effect\r\n    set bj_lastCreatedEffect = AddSpecialEffectTarget(modelName, targetWidget, attachPointName)\r\n    return bj_lastCreatedEffect\r\nendfunction",
        description: "",
        parameters: [
            { label: 'string', name: 'attachPointName', documentation: "strings variables hold a series of characters" },
            { label: 'widget', name: 'targetWidget', documentation: "an interactive game object with life" },
            { label: 'string', name: 'modelName', documentation: "strings variables hold a series of characters" },
      ],
    
    },
    
}

exports.constants = {
    FALSE: {
    completion: "constant boolean FALSE=false",
    description: "",

    },
    TRUE: {
        completion: "constant boolean TRUE=true",
        description: "",

    },
    JASS_MAX_ARRAY_SIZE: {
        completion: "constant integer JASS_MAX_ARRAY_SIZE=32768",
        description: "",

    },
    PLAYER_NEUTRAL_PASSIVE: {
        completion: "constant integer PLAYER_NEUTRAL_PASSIVE=GetPlayerNeutralPassive()",
        description: "",

    },
    PLAYER_NEUTRAL_AGGRESSIVE: {
        completion: "constant integer PLAYER_NEUTRAL_AGGRESSIVE=GetPlayerNeutralAggressive()",
        description: "",

    },
    PLAYER_COLOR_RED: {
        completion: "constant playercolor PLAYER_COLOR_RED=ConvertPlayerColor(0)",
        description: "",

    },
    PLAYER_COLOR_BLUE: {
        completion: "constant playercolor PLAYER_COLOR_BLUE=ConvertPlayerColor(1)",
        description: "",

    },
    PLAYER_COLOR_CYAN: {
        completion: "constant playercolor PLAYER_COLOR_CYAN=ConvertPlayerColor(2)",
        description: "",

    },
    PLAYER_COLOR_PURPLE: {
        completion: "constant playercolor PLAYER_COLOR_PURPLE=ConvertPlayerColor(3)",
        description: "",

    },
    PLAYER_COLOR_YELLOW: {
        completion: "constant playercolor PLAYER_COLOR_YELLOW=ConvertPlayerColor(4)",
        description: "",

    },
    PLAYER_COLOR_ORANGE: {
        completion: "constant playercolor PLAYER_COLOR_ORANGE=ConvertPlayerColor(5)",
        description: "",

    },
    PLAYER_COLOR_GREEN: {
        completion: "constant playercolor PLAYER_COLOR_GREEN=ConvertPlayerColor(6)",
        description: "",

    },
    PLAYER_COLOR_PINK: {
        completion: "constant playercolor PLAYER_COLOR_PINK=ConvertPlayerColor(7)",
        description: "",

    },
    PLAYER_COLOR_LIGHT_GRAY: {
        completion: "constant playercolor PLAYER_COLOR_LIGHT_GRAY=ConvertPlayerColor(8)",
        description: "",

    },
    PLAYER_COLOR_LIGHT_BLUE: {
        completion: "constant playercolor PLAYER_COLOR_LIGHT_BLUE=ConvertPlayerColor(9)",
        description: "",

    },
    PLAYER_COLOR_AQUA: {
        completion: "constant playercolor PLAYER_COLOR_AQUA=ConvertPlayerColor(10)",
        description: "",

    },
    PLAYER_COLOR_BROWN: {
        completion: "constant playercolor PLAYER_COLOR_BROWN=ConvertPlayerColor(11)",
        description: "",

    },
    PLAYER_COLOR_MAROON: {
        completion: "constant playercolor PLAYER_COLOR_MAROON=ConvertPlayerColor(12)",
        description: "",

    },
    PLAYER_COLOR_NAVY: {
        completion: "constant playercolor PLAYER_COLOR_NAVY=ConvertPlayerColor(13)",
        description: "",

    },
    PLAYER_COLOR_TURQUOISE: {
        completion: "constant playercolor PLAYER_COLOR_TURQUOISE=ConvertPlayerColor(14)",
        description: "",

    },
    PLAYER_COLOR_VIOLET: {
        completion: "constant playercolor PLAYER_COLOR_VIOLET=ConvertPlayerColor(15)",
        description: "",

    },
    PLAYER_COLOR_WHEAT: {
        completion: "constant playercolor PLAYER_COLOR_WHEAT=ConvertPlayerColor(16)",
        description: "",

    },
    PLAYER_COLOR_PEACH: {
        completion: "constant playercolor PLAYER_COLOR_PEACH=ConvertPlayerColor(17)",
        description: "",

    },
    PLAYER_COLOR_MINT: {
        completion: "constant playercolor PLAYER_COLOR_MINT=ConvertPlayerColor(18)",
        description: "",

    },
    PLAYER_COLOR_LAVENDER: {
        completion: "constant playercolor PLAYER_COLOR_LAVENDER=ConvertPlayerColor(19)",
        description: "",

    },
    PLAYER_COLOR_COAL: {
        completion: "constant playercolor PLAYER_COLOR_COAL=ConvertPlayerColor(20)",
        description: "",

    },
    PLAYER_COLOR_SNOW: {
        completion: "constant playercolor PLAYER_COLOR_SNOW=ConvertPlayerColor(21)",
        description: "",

    },
    PLAYER_COLOR_EMERALD: {
        completion: "constant playercolor PLAYER_COLOR_EMERALD=ConvertPlayerColor(22)",
        description: "",

    },
    PLAYER_COLOR_PEANUT: {
        completion: "constant playercolor PLAYER_COLOR_PEANUT=ConvertPlayerColor(23)",
        description: "",

    },
    RACE_HUMAN: {
        completion: "constant race RACE_HUMAN=ConvertRace(1)",
        description: "",

    },
    RACE_ORC: {
        completion: "constant race RACE_ORC=ConvertRace(2)",
        description: "",

    },
    RACE_UNDEAD: {
        completion: "constant race RACE_UNDEAD=ConvertRace(3)",
        description: "",

    },
    RACE_NIGHTELF: {
        completion: "constant race RACE_NIGHTELF=ConvertRace(4)",
        description: "",

    },
    RACE_DEMON: {
        completion: "constant race RACE_DEMON=ConvertRace(5)",
        description: "",

    },
    RACE_OTHER: {
        completion: "constant race RACE_OTHER=ConvertRace(7)",
        description: "",

    },
    PLAYER_GAME_RESULT_VICTORY: {
        completion: "constant playergameresult PLAYER_GAME_RESULT_VICTORY=ConvertPlayerGameResult(0)",
        description: "",

    },
    PLAYER_GAME_RESULT_DEFEAT: {
        completion: "constant playergameresult PLAYER_GAME_RESULT_DEFEAT=ConvertPlayerGameResult(1)",
        description: "",

    },
    PLAYER_GAME_RESULT_TIE: {
        completion: "constant playergameresult PLAYER_GAME_RESULT_TIE=ConvertPlayerGameResult(2)",
        description: "",

    },
    PLAYER_GAME_RESULT_NEUTRAL: {
        completion: "constant playergameresult PLAYER_GAME_RESULT_NEUTRAL=ConvertPlayerGameResult(3)",
        description: "",

    },
    ALLIANCE_PASSIVE: {
        completion: "constant alliancetype ALLIANCE_PASSIVE=ConvertAllianceType(0)",
        description: "",

    },
    ALLIANCE_HELP_REQUEST: {
        completion: "constant alliancetype ALLIANCE_HELP_REQUEST=ConvertAllianceType(1)",
        description: "",

    },
    ALLIANCE_HELP_RESPONSE: {
        completion: "constant alliancetype ALLIANCE_HELP_RESPONSE=ConvertAllianceType(2)",
        description: "",

    },
    ALLIANCE_SHARED_XP: {
        completion: "constant alliancetype ALLIANCE_SHARED_XP=ConvertAllianceType(3)",
        description: "",

    },
    ALLIANCE_SHARED_SPELLS: {
        completion: "constant alliancetype ALLIANCE_SHARED_SPELLS=ConvertAllianceType(4)",
        description: "",

    },
    ALLIANCE_SHARED_VISION: {
        completion: "constant alliancetype ALLIANCE_SHARED_VISION=ConvertAllianceType(5)",
        description: "",

    },
    ALLIANCE_SHARED_CONTROL: {
        completion: "constant alliancetype ALLIANCE_SHARED_CONTROL=ConvertAllianceType(6)",
        description: "",

    },
    ALLIANCE_SHARED_ADVANCED_CONTROL: {
        completion: "constant alliancetype ALLIANCE_SHARED_ADVANCED_CONTROL=ConvertAllianceType(7)",
        description: "",

    },
    ALLIANCE_RESCUABLE: {
        completion: "constant alliancetype ALLIANCE_RESCUABLE=ConvertAllianceType(8)",
        description: "",

    },
    ALLIANCE_SHARED_VISION_FORCED: {
        completion: "constant alliancetype ALLIANCE_SHARED_VISION_FORCED=ConvertAllianceType(9)",
        description: "",

    },
    VERSION_REIGN_OF_CHAOS: {
        completion: "constant version VERSION_REIGN_OF_CHAOS=ConvertVersion(0)",
        description: "",

    },
    VERSION_FROZEN_THRONE: {
        completion: "constant version VERSION_FROZEN_THRONE=ConvertVersion(1)",
        description: "",

    },
    ATTACK_TYPE_NORMAL: {
        completion: "constant attacktype ATTACK_TYPE_NORMAL=ConvertAttackType(0)",
        description: "",

    },
    ATTACK_TYPE_MELEE: {
        completion: "constant attacktype ATTACK_TYPE_MELEE=ConvertAttackType(1)",
        description: "",

    },
    ATTACK_TYPE_PIERCE: {
        completion: "constant attacktype ATTACK_TYPE_PIERCE=ConvertAttackType(2)",
        description: "",

    },
    ATTACK_TYPE_SIEGE: {
        completion: "constant attacktype ATTACK_TYPE_SIEGE=ConvertAttackType(3)",
        description: "",

    },
    ATTACK_TYPE_MAGIC: {
        completion: "constant attacktype ATTACK_TYPE_MAGIC=ConvertAttackType(4)",
        description: "",

    },
    ATTACK_TYPE_CHAOS: {
        completion: "constant attacktype ATTACK_TYPE_CHAOS=ConvertAttackType(5)",
        description: "",

    },
    ATTACK_TYPE_HERO: {
        completion: "constant attacktype ATTACK_TYPE_HERO=ConvertAttackType(6)",
        description: "",

    },
    DAMAGE_TYPE_UNKNOWN: {
        completion: "constant damagetype DAMAGE_TYPE_UNKNOWN=ConvertDamageType(0)",
        description: "",

    },
    DAMAGE_TYPE_NORMAL: {
        completion: "constant damagetype DAMAGE_TYPE_NORMAL=ConvertDamageType(4)",
        description: "",

    },
    DAMAGE_TYPE_ENHANCED: {
        completion: "constant damagetype DAMAGE_TYPE_ENHANCED=ConvertDamageType(5)",
        description: "",

    },
    DAMAGE_TYPE_FIRE: {
        completion: "constant damagetype DAMAGE_TYPE_FIRE=ConvertDamageType(8)",
        description: "",

    },
    DAMAGE_TYPE_COLD: {
        completion: "constant damagetype DAMAGE_TYPE_COLD=ConvertDamageType(9)",
        description: "",

    },
    DAMAGE_TYPE_LIGHTNING: {
        completion: "constant damagetype DAMAGE_TYPE_LIGHTNING=ConvertDamageType(10)",
        description: "",

    },
    DAMAGE_TYPE_POISON: {
        completion: "constant damagetype DAMAGE_TYPE_POISON=ConvertDamageType(11)",
        description: "",

    },
    DAMAGE_TYPE_DISEASE: {
        completion: "constant damagetype DAMAGE_TYPE_DISEASE=ConvertDamageType(12)",
        description: "",

    },
    DAMAGE_TYPE_DIVINE: {
        completion: "constant damagetype DAMAGE_TYPE_DIVINE=ConvertDamageType(13)",
        description: "",

    },
    DAMAGE_TYPE_MAGIC: {
        completion: "constant damagetype DAMAGE_TYPE_MAGIC=ConvertDamageType(14)",
        description: "",

    },
    DAMAGE_TYPE_SONIC: {
        completion: "constant damagetype DAMAGE_TYPE_SONIC=ConvertDamageType(15)",
        description: "",

    },
    DAMAGE_TYPE_ACID: {
        completion: "constant damagetype DAMAGE_TYPE_ACID=ConvertDamageType(16)",
        description: "",

    },
    DAMAGE_TYPE_FORCE: {
        completion: "constant damagetype DAMAGE_TYPE_FORCE=ConvertDamageType(17)",
        description: "",

    },
    DAMAGE_TYPE_DEATH: {
        completion: "constant damagetype DAMAGE_TYPE_DEATH=ConvertDamageType(18)",
        description: "",

    },
    DAMAGE_TYPE_MIND: {
        completion: "constant damagetype DAMAGE_TYPE_MIND=ConvertDamageType(19)",
        description: "",

    },
    DAMAGE_TYPE_PLANT: {
        completion: "constant damagetype DAMAGE_TYPE_PLANT=ConvertDamageType(20)",
        description: "",

    },
    DAMAGE_TYPE_DEFENSIVE: {
        completion: "constant damagetype DAMAGE_TYPE_DEFENSIVE=ConvertDamageType(21)",
        description: "",

    },
    DAMAGE_TYPE_DEMOLITION: {
        completion: "constant damagetype DAMAGE_TYPE_DEMOLITION=ConvertDamageType(22)",
        description: "",

    },
    DAMAGE_TYPE_SLOW_POISON: {
        completion: "constant damagetype DAMAGE_TYPE_SLOW_POISON=ConvertDamageType(23)",
        description: "",

    },
    DAMAGE_TYPE_SPIRIT_LINK: {
        completion: "constant damagetype DAMAGE_TYPE_SPIRIT_LINK=ConvertDamageType(24)",
        description: "",

    },
    DAMAGE_TYPE_SHADOW_STRIKE: {
        completion: "constant damagetype DAMAGE_TYPE_SHADOW_STRIKE=ConvertDamageType(25)",
        description: "",

    },
    DAMAGE_TYPE_UNIVERSAL: {
        completion: "constant damagetype DAMAGE_TYPE_UNIVERSAL=ConvertDamageType(26)",
        description: "",

    },
    WEAPON_TYPE_WHOKNOWS: {
        completion: "constant weapontype WEAPON_TYPE_WHOKNOWS=ConvertWeaponType(0)",
        description: "",

    },
    WEAPON_TYPE_METAL_LIGHT_CHOP: {
        completion: "constant weapontype WEAPON_TYPE_METAL_LIGHT_CHOP=ConvertWeaponType(1)",
        description: "",

    },
    WEAPON_TYPE_METAL_MEDIUM_CHOP: {
        completion: "constant weapontype WEAPON_TYPE_METAL_MEDIUM_CHOP=ConvertWeaponType(2)",
        description: "",

    },
    WEAPON_TYPE_METAL_HEAVY_CHOP: {
        completion: "constant weapontype WEAPON_TYPE_METAL_HEAVY_CHOP=ConvertWeaponType(3)",
        description: "",

    },
    WEAPON_TYPE_METAL_LIGHT_SLICE: {
        completion: "constant weapontype WEAPON_TYPE_METAL_LIGHT_SLICE=ConvertWeaponType(4)",
        description: "",

    },
    WEAPON_TYPE_METAL_MEDIUM_SLICE: {
        completion: "constant weapontype WEAPON_TYPE_METAL_MEDIUM_SLICE=ConvertWeaponType(5)",
        description: "",

    },
    WEAPON_TYPE_METAL_HEAVY_SLICE: {
        completion: "constant weapontype WEAPON_TYPE_METAL_HEAVY_SLICE=ConvertWeaponType(6)",
        description: "",

    },
    WEAPON_TYPE_METAL_MEDIUM_BASH: {
        completion: "constant weapontype WEAPON_TYPE_METAL_MEDIUM_BASH=ConvertWeaponType(7)",
        description: "",

    },
    WEAPON_TYPE_METAL_HEAVY_BASH: {
        completion: "constant weapontype WEAPON_TYPE_METAL_HEAVY_BASH=ConvertWeaponType(8)",
        description: "",

    },
    WEAPON_TYPE_METAL_MEDIUM_STAB: {
        completion: "constant weapontype WEAPON_TYPE_METAL_MEDIUM_STAB=ConvertWeaponType(9)",
        description: "",

    },
    WEAPON_TYPE_METAL_HEAVY_STAB: {
        completion: "constant weapontype WEAPON_TYPE_METAL_HEAVY_STAB=ConvertWeaponType(10)",
        description: "",

    },
    WEAPON_TYPE_WOOD_LIGHT_SLICE: {
        completion: "constant weapontype WEAPON_TYPE_WOOD_LIGHT_SLICE=ConvertWeaponType(11)",
        description: "",

    },
    WEAPON_TYPE_WOOD_MEDIUM_SLICE: {
        completion: "constant weapontype WEAPON_TYPE_WOOD_MEDIUM_SLICE=ConvertWeaponType(12)",
        description: "",

    },
    WEAPON_TYPE_WOOD_HEAVY_SLICE: {
        completion: "constant weapontype WEAPON_TYPE_WOOD_HEAVY_SLICE=ConvertWeaponType(13)",
        description: "",

    },
    WEAPON_TYPE_WOOD_LIGHT_BASH: {
        completion: "constant weapontype WEAPON_TYPE_WOOD_LIGHT_BASH=ConvertWeaponType(14)",
        description: "",

    },
    WEAPON_TYPE_WOOD_MEDIUM_BASH: {
        completion: "constant weapontype WEAPON_TYPE_WOOD_MEDIUM_BASH=ConvertWeaponType(15)",
        description: "",

    },
    WEAPON_TYPE_WOOD_HEAVY_BASH: {
        completion: "constant weapontype WEAPON_TYPE_WOOD_HEAVY_BASH=ConvertWeaponType(16)",
        description: "",

    },
    WEAPON_TYPE_WOOD_LIGHT_STAB: {
        completion: "constant weapontype WEAPON_TYPE_WOOD_LIGHT_STAB=ConvertWeaponType(17)",
        description: "",

    },
    WEAPON_TYPE_WOOD_MEDIUM_STAB: {
        completion: "constant weapontype WEAPON_TYPE_WOOD_MEDIUM_STAB=ConvertWeaponType(18)",
        description: "",

    },
    WEAPON_TYPE_CLAW_LIGHT_SLICE: {
        completion: "constant weapontype WEAPON_TYPE_CLAW_LIGHT_SLICE=ConvertWeaponType(19)",
        description: "",

    },
    WEAPON_TYPE_CLAW_MEDIUM_SLICE: {
        completion: "constant weapontype WEAPON_TYPE_CLAW_MEDIUM_SLICE=ConvertWeaponType(20)",
        description: "",

    },
    WEAPON_TYPE_CLAW_HEAVY_SLICE: {
        completion: "constant weapontype WEAPON_TYPE_CLAW_HEAVY_SLICE=ConvertWeaponType(21)",
        description: "",

    },
    WEAPON_TYPE_AXE_MEDIUM_CHOP: {
        completion: "constant weapontype WEAPON_TYPE_AXE_MEDIUM_CHOP=ConvertWeaponType(22)",
        description: "",

    },
    WEAPON_TYPE_ROCK_HEAVY_BASH: {
        completion: "constant weapontype WEAPON_TYPE_ROCK_HEAVY_BASH=ConvertWeaponType(23)",
        description: "",

    },
    PATHING_TYPE_ANY: {
        completion: "constant pathingtype PATHING_TYPE_ANY=ConvertPathingType(0)",
        description: "",

    },
    PATHING_TYPE_WALKABILITY: {
        completion: "constant pathingtype PATHING_TYPE_WALKABILITY=ConvertPathingType(1)",
        description: "",

    },
    PATHING_TYPE_FLYABILITY: {
        completion: "constant pathingtype PATHING_TYPE_FLYABILITY=ConvertPathingType(2)",
        description: "",

    },
    PATHING_TYPE_BUILDABILITY: {
        completion: "constant pathingtype PATHING_TYPE_BUILDABILITY=ConvertPathingType(3)",
        description: "",

    },
    PATHING_TYPE_PEONHARVESTPATHING: {
        completion: "constant pathingtype PATHING_TYPE_PEONHARVESTPATHING=ConvertPathingType(4)",
        description: "",

    },
    PATHING_TYPE_BLIGHTPATHING: {
        completion: "constant pathingtype PATHING_TYPE_BLIGHTPATHING=ConvertPathingType(5)",
        description: "",

    },
    PATHING_TYPE_FLOATABILITY: {
        completion: "constant pathingtype PATHING_TYPE_FLOATABILITY=ConvertPathingType(6)",
        description: "",

    },
    PATHING_TYPE_AMPHIBIOUSPATHING: {
        completion: "constant pathingtype PATHING_TYPE_AMPHIBIOUSPATHING=ConvertPathingType(7)",
        description: "",

    },
    MOUSE_BUTTON_TYPE_LEFT: {
        completion: "constant mousebuttontype MOUSE_BUTTON_TYPE_LEFT=ConvertMouseButtonType(1)",
        description: "",

    },
    MOUSE_BUTTON_TYPE_MIDDLE: {
        completion: "constant mousebuttontype MOUSE_BUTTON_TYPE_MIDDLE=ConvertMouseButtonType(2)",
        description: "",

    },
    MOUSE_BUTTON_TYPE_RIGHT: {
        completion: "constant mousebuttontype MOUSE_BUTTON_TYPE_RIGHT=ConvertMouseButtonType(3)",
        description: "",

    },
    ANIM_TYPE_BIRTH: {
        completion: "constant animtype ANIM_TYPE_BIRTH=ConvertAnimType(0)",
        description: "",

    },
    ANIM_TYPE_DEATH: {
        completion: "constant animtype ANIM_TYPE_DEATH=ConvertAnimType(1)",
        description: "",

    },
    ANIM_TYPE_DECAY: {
        completion: "constant animtype ANIM_TYPE_DECAY=ConvertAnimType(2)",
        description: "",

    },
    ANIM_TYPE_DISSIPATE: {
        completion: "constant animtype ANIM_TYPE_DISSIPATE=ConvertAnimType(3)",
        description: "",

    },
    ANIM_TYPE_STAND: {
        completion: "constant animtype ANIM_TYPE_STAND=ConvertAnimType(4)",
        description: "",

    },
    ANIM_TYPE_WALK: {
        completion: "constant animtype ANIM_TYPE_WALK=ConvertAnimType(5)",
        description: "",

    },
    ANIM_TYPE_ATTACK: {
        completion: "constant animtype ANIM_TYPE_ATTACK=ConvertAnimType(6)",
        description: "",

    },
    ANIM_TYPE_MORPH: {
        completion: "constant animtype ANIM_TYPE_MORPH=ConvertAnimType(7)",
        description: "",

    },
    ANIM_TYPE_SLEEP: {
        completion: "constant animtype ANIM_TYPE_SLEEP=ConvertAnimType(8)",
        description: "",

    },
    ANIM_TYPE_SPELL: {
        completion: "constant animtype ANIM_TYPE_SPELL=ConvertAnimType(9)",
        description: "",

    },
    ANIM_TYPE_PORTRAIT: {
        completion: "constant animtype ANIM_TYPE_PORTRAIT=ConvertAnimType(10)",
        description: "",

    },
    SUBANIM_TYPE_ROOTED: {
        completion: "constant subanimtype SUBANIM_TYPE_ROOTED=ConvertSubAnimType(11)",
        description: "",

    },
    SUBANIM_TYPE_ALTERNATE_EX: {
        completion: "constant subanimtype SUBANIM_TYPE_ALTERNATE_EX=ConvertSubAnimType(12)",
        description: "",

    },
    SUBANIM_TYPE_LOOPING: {
        completion: "constant subanimtype SUBANIM_TYPE_LOOPING=ConvertSubAnimType(13)",
        description: "",

    },
    SUBANIM_TYPE_SLAM: {
        completion: "constant subanimtype SUBANIM_TYPE_SLAM=ConvertSubAnimType(14)",
        description: "",

    },
    SUBANIM_TYPE_THROW: {
        completion: "constant subanimtype SUBANIM_TYPE_THROW=ConvertSubAnimType(15)",
        description: "",

    },
    SUBANIM_TYPE_SPIKED: {
        completion: "constant subanimtype SUBANIM_TYPE_SPIKED=ConvertSubAnimType(16)",
        description: "",

    },
    SUBANIM_TYPE_FAST: {
        completion: "constant subanimtype SUBANIM_TYPE_FAST=ConvertSubAnimType(17)",
        description: "",

    },
    SUBANIM_TYPE_SPIN: {
        completion: "constant subanimtype SUBANIM_TYPE_SPIN=ConvertSubAnimType(18)",
        description: "",

    },
    SUBANIM_TYPE_READY: {
        completion: "constant subanimtype SUBANIM_TYPE_READY=ConvertSubAnimType(19)",
        description: "",

    },
    SUBANIM_TYPE_CHANNEL: {
        completion: "constant subanimtype SUBANIM_TYPE_CHANNEL=ConvertSubAnimType(20)",
        description: "",

    },
    SUBANIM_TYPE_DEFEND: {
        completion: "constant subanimtype SUBANIM_TYPE_DEFEND=ConvertSubAnimType(21)",
        description: "",

    },
    SUBANIM_TYPE_VICTORY: {
        completion: "constant subanimtype SUBANIM_TYPE_VICTORY=ConvertSubAnimType(22)",
        description: "",

    },
    SUBANIM_TYPE_TURN: {
        completion: "constant subanimtype SUBANIM_TYPE_TURN=ConvertSubAnimType(23)",
        description: "",

    },
    SUBANIM_TYPE_LEFT: {
        completion: "constant subanimtype SUBANIM_TYPE_LEFT=ConvertSubAnimType(24)",
        description: "",

    },
    SUBANIM_TYPE_RIGHT: {
        completion: "constant subanimtype SUBANIM_TYPE_RIGHT=ConvertSubAnimType(25)",
        description: "",

    },
    SUBANIM_TYPE_FIRE: {
        completion: "constant subanimtype SUBANIM_TYPE_FIRE=ConvertSubAnimType(26)",
        description: "",

    },
    SUBANIM_TYPE_FLESH: {
        completion: "constant subanimtype SUBANIM_TYPE_FLESH=ConvertSubAnimType(27)",
        description: "",

    },
    SUBANIM_TYPE_HIT: {
        completion: "constant subanimtype SUBANIM_TYPE_HIT=ConvertSubAnimType(28)",
        description: "",

    },
    SUBANIM_TYPE_WOUNDED: {
        completion: "constant subanimtype SUBANIM_TYPE_WOUNDED=ConvertSubAnimType(29)",
        description: "",

    },
    SUBANIM_TYPE_LIGHT: {
        completion: "constant subanimtype SUBANIM_TYPE_LIGHT=ConvertSubAnimType(30)",
        description: "",

    },
    SUBANIM_TYPE_MODERATE: {
        completion: "constant subanimtype SUBANIM_TYPE_MODERATE=ConvertSubAnimType(31)",
        description: "",

    },
    SUBANIM_TYPE_SEVERE: {
        completion: "constant subanimtype SUBANIM_TYPE_SEVERE=ConvertSubAnimType(32)",
        description: "",

    },
    SUBANIM_TYPE_CRITICAL: {
        completion: "constant subanimtype SUBANIM_TYPE_CRITICAL=ConvertSubAnimType(33)",
        description: "",

    },
    SUBANIM_TYPE_COMPLETE: {
        completion: "constant subanimtype SUBANIM_TYPE_COMPLETE=ConvertSubAnimType(34)",
        description: "",

    },
    SUBANIM_TYPE_GOLD: {
        completion: "constant subanimtype SUBANIM_TYPE_GOLD=ConvertSubAnimType(35)",
        description: "",

    },
    SUBANIM_TYPE_LUMBER: {
        completion: "constant subanimtype SUBANIM_TYPE_LUMBER=ConvertSubAnimType(36)",
        description: "",

    },
    SUBANIM_TYPE_WORK: {
        completion: "constant subanimtype SUBANIM_TYPE_WORK=ConvertSubAnimType(37)",
        description: "",

    },
    SUBANIM_TYPE_TALK: {
        completion: "constant subanimtype SUBANIM_TYPE_TALK=ConvertSubAnimType(38)",
        description: "",

    },
    SUBANIM_TYPE_FIRST: {
        completion: "constant subanimtype SUBANIM_TYPE_FIRST=ConvertSubAnimType(39)",
        description: "",

    },
    SUBANIM_TYPE_SECOND: {
        completion: "constant subanimtype SUBANIM_TYPE_SECOND=ConvertSubAnimType(40)",
        description: "",

    },
    SUBANIM_TYPE_THIRD: {
        completion: "constant subanimtype SUBANIM_TYPE_THIRD=ConvertSubAnimType(41)",
        description: "",

    },
    SUBANIM_TYPE_FOURTH: {
        completion: "constant subanimtype SUBANIM_TYPE_FOURTH=ConvertSubAnimType(42)",
        description: "",

    },
    SUBANIM_TYPE_FIFTH: {
        completion: "constant subanimtype SUBANIM_TYPE_FIFTH=ConvertSubAnimType(43)",
        description: "",

    },
    SUBANIM_TYPE_ONE: {
        completion: "constant subanimtype SUBANIM_TYPE_ONE=ConvertSubAnimType(44)",
        description: "",

    },
    SUBANIM_TYPE_TWO: {
        completion: "constant subanimtype SUBANIM_TYPE_TWO=ConvertSubAnimType(45)",
        description: "",

    },
    SUBANIM_TYPE_THREE: {
        completion: "constant subanimtype SUBANIM_TYPE_THREE=ConvertSubAnimType(46)",
        description: "",

    },
    SUBANIM_TYPE_FOUR: {
        completion: "constant subanimtype SUBANIM_TYPE_FOUR=ConvertSubAnimType(47)",
        description: "",

    },
    SUBANIM_TYPE_FIVE: {
        completion: "constant subanimtype SUBANIM_TYPE_FIVE=ConvertSubAnimType(48)",
        description: "",

    },
    SUBANIM_TYPE_SMALL: {
        completion: "constant subanimtype SUBANIM_TYPE_SMALL=ConvertSubAnimType(49)",
        description: "",

    },
    SUBANIM_TYPE_MEDIUM: {
        completion: "constant subanimtype SUBANIM_TYPE_MEDIUM=ConvertSubAnimType(50)",
        description: "",

    },
    SUBANIM_TYPE_LARGE: {
        completion: "constant subanimtype SUBANIM_TYPE_LARGE=ConvertSubAnimType(51)",
        description: "",

    },
    SUBANIM_TYPE_UPGRADE: {
        completion: "constant subanimtype SUBANIM_TYPE_UPGRADE=ConvertSubAnimType(52)",
        description: "",

    },
    SUBANIM_TYPE_DRAIN: {
        completion: "constant subanimtype SUBANIM_TYPE_DRAIN=ConvertSubAnimType(53)",
        description: "",

    },
    SUBANIM_TYPE_FILL: {
        completion: "constant subanimtype SUBANIM_TYPE_FILL=ConvertSubAnimType(54)",
        description: "",

    },
    SUBANIM_TYPE_CHAINLIGHTNING: {
        completion: "constant subanimtype SUBANIM_TYPE_CHAINLIGHTNING=ConvertSubAnimType(55)",
        description: "",

    },
    SUBANIM_TYPE_EATTREE: {
        completion: "constant subanimtype SUBANIM_TYPE_EATTREE=ConvertSubAnimType(56)",
        description: "",

    },
    SUBANIM_TYPE_PUKE: {
        completion: "constant subanimtype SUBANIM_TYPE_PUKE=ConvertSubAnimType(57)",
        description: "",

    },
    SUBANIM_TYPE_FLAIL: {
        completion: "constant subanimtype SUBANIM_TYPE_FLAIL=ConvertSubAnimType(58)",
        description: "",

    },
    SUBANIM_TYPE_OFF: {
        completion: "constant subanimtype SUBANIM_TYPE_OFF=ConvertSubAnimType(59)",
        description: "",

    },
    SUBANIM_TYPE_SWIM: {
        completion: "constant subanimtype SUBANIM_TYPE_SWIM=ConvertSubAnimType(60)",
        description: "",

    },
    SUBANIM_TYPE_ENTANGLE: {
        completion: "constant subanimtype SUBANIM_TYPE_ENTANGLE=ConvertSubAnimType(61)",
        description: "",

    },
    SUBANIM_TYPE_BERSERK: {
        completion: "constant subanimtype SUBANIM_TYPE_BERSERK=ConvertSubAnimType(62)",
        description: "",

    },
    RACE_PREF_HUMAN: {
        completion: "constant racepreference RACE_PREF_HUMAN=ConvertRacePref(1)",
        description: "",

    },
    RACE_PREF_ORC: {
        completion: "constant racepreference RACE_PREF_ORC=ConvertRacePref(2)",
        description: "",

    },
    RACE_PREF_NIGHTELF: {
        completion: "constant racepreference RACE_PREF_NIGHTELF=ConvertRacePref(4)",
        description: "",

    },
    RACE_PREF_UNDEAD: {
        completion: "constant racepreference RACE_PREF_UNDEAD=ConvertRacePref(8)",
        description: "",

    },
    RACE_PREF_DEMON: {
        completion: "constant racepreference RACE_PREF_DEMON=ConvertRacePref(16)",
        description: "",

    },
    RACE_PREF_RANDOM: {
        completion: "constant racepreference RACE_PREF_RANDOM=ConvertRacePref(32)",
        description: "",

    },
    RACE_PREF_USER_SELECTABLE: {
        completion: "constant racepreference RACE_PREF_USER_SELECTABLE=ConvertRacePref(64)",
        description: "",

    },
    MAP_CONTROL_USER: {
        completion: "constant mapcontrol MAP_CONTROL_USER=ConvertMapControl(0)",
        description: "",

    },
    MAP_CONTROL_COMPUTER: {
        completion: "constant mapcontrol MAP_CONTROL_COMPUTER=ConvertMapControl(1)",
        description: "",

    },
    MAP_CONTROL_RESCUABLE: {
        completion: "constant mapcontrol MAP_CONTROL_RESCUABLE=ConvertMapControl(2)",
        description: "",

    },
    MAP_CONTROL_NEUTRAL: {
        completion: "constant mapcontrol MAP_CONTROL_NEUTRAL=ConvertMapControl(3)",
        description: "",

    },
    MAP_CONTROL_CREEP: {
        completion: "constant mapcontrol MAP_CONTROL_CREEP=ConvertMapControl(4)",
        description: "",

    },
    MAP_CONTROL_NONE: {
        completion: "constant mapcontrol MAP_CONTROL_NONE=ConvertMapControl(5)",
        description: "",

    },
    GAME_TYPE_MELEE: {
        completion: "constant gametype GAME_TYPE_MELEE=ConvertGameType(1)",
        description: "",

    },
    GAME_TYPE_FFA: {
        completion: "constant gametype GAME_TYPE_FFA=ConvertGameType(2)",
        description: "",

    },
    GAME_TYPE_USE_MAP_SETTINGS: {
        completion: "constant gametype GAME_TYPE_USE_MAP_SETTINGS=ConvertGameType(4)",
        description: "",

    },
    GAME_TYPE_BLIZ: {
        completion: "constant gametype GAME_TYPE_BLIZ=ConvertGameType(8)",
        description: "",

    },
    GAME_TYPE_ONE_ON_ONE: {
        completion: "constant gametype GAME_TYPE_ONE_ON_ONE=ConvertGameType(16)",
        description: "",

    },
    GAME_TYPE_TWO_TEAM_PLAY: {
        completion: "constant gametype GAME_TYPE_TWO_TEAM_PLAY=ConvertGameType(32)",
        description: "",

    },
    GAME_TYPE_THREE_TEAM_PLAY: {
        completion: "constant gametype GAME_TYPE_THREE_TEAM_PLAY=ConvertGameType(64)",
        description: "",

    },
    GAME_TYPE_FOUR_TEAM_PLAY: {
        completion: "constant gametype GAME_TYPE_FOUR_TEAM_PLAY=ConvertGameType(128)",
        description: "",

    },
    MAP_FOG_HIDE_TERRAIN: {
        completion: "constant mapflag MAP_FOG_HIDE_TERRAIN=ConvertMapFlag(1)",
        description: "",

    },
    MAP_FOG_MAP_EXPLORED: {
        completion: "constant mapflag MAP_FOG_MAP_EXPLORED=ConvertMapFlag(2)",
        description: "",

    },
    MAP_FOG_ALWAYS_VISIBLE: {
        completion: "constant mapflag MAP_FOG_ALWAYS_VISIBLE=ConvertMapFlag(4)",
        description: "",

    },
    MAP_USE_HANDICAPS: {
        completion: "constant mapflag MAP_USE_HANDICAPS=ConvertMapFlag(8)",
        description: "",

    },
    MAP_OBSERVERS: {
        completion: "constant mapflag MAP_OBSERVERS=ConvertMapFlag(16)",
        description: "",

    },
    MAP_OBSERVERS_ON_DEATH: {
        completion: "constant mapflag MAP_OBSERVERS_ON_DEATH=ConvertMapFlag(32)",
        description: "",

    },
    MAP_FIXED_COLORS: {
        completion: "constant mapflag MAP_FIXED_COLORS=ConvertMapFlag(128)",
        description: "",

    },
    MAP_LOCK_RESOURCE_TRADING: {
        completion: "constant mapflag MAP_LOCK_RESOURCE_TRADING=ConvertMapFlag(256)",
        description: "",

    },
    MAP_RESOURCE_TRADING_ALLIES_ONLY: {
        completion: "constant mapflag MAP_RESOURCE_TRADING_ALLIES_ONLY=ConvertMapFlag(512)",
        description: "",

    },
    MAP_LOCK_ALLIANCE_CHANGES: {
        completion: "constant mapflag MAP_LOCK_ALLIANCE_CHANGES=ConvertMapFlag(1024)",
        description: "",

    },
    MAP_ALLIANCE_CHANGES_HIDDEN: {
        completion: "constant mapflag MAP_ALLIANCE_CHANGES_HIDDEN=ConvertMapFlag(2048)",
        description: "",

    },
    MAP_CHEATS: {
        completion: "constant mapflag MAP_CHEATS=ConvertMapFlag(4096)",
        description: "",

    },
    MAP_CHEATS_HIDDEN: {
        completion: "constant mapflag MAP_CHEATS_HIDDEN=ConvertMapFlag(8192)",
        description: "",

    },
    MAP_LOCK_SPEED: {
        completion: "constant mapflag MAP_LOCK_SPEED=ConvertMapFlag(8192*2)",
        description: "",

    },
    MAP_LOCK_RANDOM_SEED: {
        completion: "constant mapflag MAP_LOCK_RANDOM_SEED=ConvertMapFlag(8192*4)",
        description: "",

    },
    MAP_SHARED_ADVANCED_CONTROL: {
        completion: "constant mapflag MAP_SHARED_ADVANCED_CONTROL=ConvertMapFlag(8192*8)",
        description: "",

    },
    MAP_RANDOM_HERO: {
        completion: "constant mapflag MAP_RANDOM_HERO=ConvertMapFlag(8192*16)",
        description: "",

    },
    MAP_RANDOM_RACES: {
        completion: "constant mapflag MAP_RANDOM_RACES=ConvertMapFlag(8192*32)",
        description: "",

    },
    MAP_RELOADED: {
        completion: "constant mapflag MAP_RELOADED=ConvertMapFlag(8192*64)",
        description: "",

    },
    MAP_PLACEMENT_RANDOM: {
        completion: "constant placement MAP_PLACEMENT_RANDOM=ConvertPlacement(0)",
        description: "",

    },
    MAP_PLACEMENT_FIXED: {
        completion: "constant placement MAP_PLACEMENT_FIXED=ConvertPlacement(1)",
        description: "",

    },
    MAP_PLACEMENT_USE_MAP_SETTINGS: {
        completion: "constant placement MAP_PLACEMENT_USE_MAP_SETTINGS=ConvertPlacement(2)",
        description: "",

    },
    MAP_PLACEMENT_TEAMS_TOGETHER: {
        completion: "constant placement MAP_PLACEMENT_TEAMS_TOGETHER=ConvertPlacement(3)",
        description: "",

    },
    MAP_LOC_PRIO_LOW: {
        completion: "constant startlocprio MAP_LOC_PRIO_LOW=ConvertStartLocPrio(0)",
        description: "",

    },
    MAP_LOC_PRIO_HIGH: {
        completion: "constant startlocprio MAP_LOC_PRIO_HIGH=ConvertStartLocPrio(1)",
        description: "",

    },
    MAP_LOC_PRIO_NOT: {
        completion: "constant startlocprio MAP_LOC_PRIO_NOT=ConvertStartLocPrio(2)",
        description: "",

    },
    MAP_DENSITY_NONE: {
        completion: "constant mapdensity MAP_DENSITY_NONE=ConvertMapDensity(0)",
        description: "",

    },
    MAP_DENSITY_LIGHT: {
        completion: "constant mapdensity MAP_DENSITY_LIGHT=ConvertMapDensity(1)",
        description: "",

    },
    MAP_DENSITY_MEDIUM: {
        completion: "constant mapdensity MAP_DENSITY_MEDIUM=ConvertMapDensity(2)",
        description: "",

    },
    MAP_DENSITY_HEAVY: {
        completion: "constant mapdensity MAP_DENSITY_HEAVY=ConvertMapDensity(3)",
        description: "",

    },
    MAP_DIFFICULTY_EASY: {
        completion: "constant gamedifficulty MAP_DIFFICULTY_EASY=ConvertGameDifficulty(0)",
        description: "",

    },
    MAP_DIFFICULTY_NORMAL: {
        completion: "constant gamedifficulty MAP_DIFFICULTY_NORMAL=ConvertGameDifficulty(1)",
        description: "",

    },
    MAP_DIFFICULTY_HARD: {
        completion: "constant gamedifficulty MAP_DIFFICULTY_HARD=ConvertGameDifficulty(2)",
        description: "",

    },
    MAP_DIFFICULTY_INSANE: {
        completion: "constant gamedifficulty MAP_DIFFICULTY_INSANE=ConvertGameDifficulty(3)",
        description: "",

    },
    MAP_SPEED_SLOWEST: {
        completion: "constant gamespeed MAP_SPEED_SLOWEST=ConvertGameSpeed(0)",
        description: "",

    },
    MAP_SPEED_SLOW: {
        completion: "constant gamespeed MAP_SPEED_SLOW=ConvertGameSpeed(1)",
        description: "",

    },
    MAP_SPEED_NORMAL: {
        completion: "constant gamespeed MAP_SPEED_NORMAL=ConvertGameSpeed(2)",
        description: "",

    },
    MAP_SPEED_FAST: {
        completion: "constant gamespeed MAP_SPEED_FAST=ConvertGameSpeed(3)",
        description: "",

    },
    MAP_SPEED_FASTEST: {
        completion: "constant gamespeed MAP_SPEED_FASTEST=ConvertGameSpeed(4)",
        description: "",

    },
    PLAYER_SLOT_STATE_EMPTY: {
        completion: "constant playerslotstate PLAYER_SLOT_STATE_EMPTY=ConvertPlayerSlotState(0)",
        description: "",

    },
    PLAYER_SLOT_STATE_PLAYING: {
        completion: "constant playerslotstate PLAYER_SLOT_STATE_PLAYING=ConvertPlayerSlotState(1)",
        description: "",

    },
    PLAYER_SLOT_STATE_LEFT: {
        completion: "constant playerslotstate PLAYER_SLOT_STATE_LEFT=ConvertPlayerSlotState(2)",
        description: "",

    },
    SOUND_VOLUMEGROUP_UNITMOVEMENT: {
        completion: "constant volumegroup SOUND_VOLUMEGROUP_UNITMOVEMENT=ConvertVolumeGroup(0)",
        description: "",

    },
    SOUND_VOLUMEGROUP_UNITSOUNDS: {
        completion: "constant volumegroup SOUND_VOLUMEGROUP_UNITSOUNDS=ConvertVolumeGroup(1)",
        description: "",

    },
    SOUND_VOLUMEGROUP_COMBAT: {
        completion: "constant volumegroup SOUND_VOLUMEGROUP_COMBAT=ConvertVolumeGroup(2)",
        description: "",

    },
    SOUND_VOLUMEGROUP_SPELLS: {
        completion: "constant volumegroup SOUND_VOLUMEGROUP_SPELLS=ConvertVolumeGroup(3)",
        description: "",

    },
    SOUND_VOLUMEGROUP_UI: {
        completion: "constant volumegroup SOUND_VOLUMEGROUP_UI=ConvertVolumeGroup(4)",
        description: "",

    },
    SOUND_VOLUMEGROUP_MUSIC: {
        completion: "constant volumegroup SOUND_VOLUMEGROUP_MUSIC=ConvertVolumeGroup(5)",
        description: "",

    },
    SOUND_VOLUMEGROUP_AMBIENTSOUNDS: {
        completion: "constant volumegroup SOUND_VOLUMEGROUP_AMBIENTSOUNDS=ConvertVolumeGroup(6)",
        description: "",

    },
    SOUND_VOLUMEGROUP_FIRE: {
        completion: "constant volumegroup SOUND_VOLUMEGROUP_FIRE=ConvertVolumeGroup(7)",
        description: "",

    },
    GAME_STATE_DIVINE_INTERVENTION: {
        completion: "constant igamestate GAME_STATE_DIVINE_INTERVENTION=ConvertIGameState(0)",
        description: "",

    },
    GAME_STATE_DISCONNECTED: {
        completion: "constant igamestate GAME_STATE_DISCONNECTED=ConvertIGameState(1)",
        description: "",

    },
    GAME_STATE_TIME_OF_DAY: {
        completion: "constant fgamestate GAME_STATE_TIME_OF_DAY=ConvertFGameState(2)",
        description: "",

    },
    PLAYER_STATE_GAME_RESULT: {
        completion: "constant playerstate PLAYER_STATE_GAME_RESULT=ConvertPlayerState(0)",
        description: "",

    },
    PLAYER_STATE_RESOURCE_GOLD: {
        completion: "constant playerstate PLAYER_STATE_RESOURCE_GOLD=ConvertPlayerState(1)",
        description: "",

    },
    PLAYER_STATE_RESOURCE_LUMBER: {
        completion: "constant playerstate PLAYER_STATE_RESOURCE_LUMBER=ConvertPlayerState(2)",
        description: "",

    },
    PLAYER_STATE_RESOURCE_HERO_TOKENS: {
        completion: "constant playerstate PLAYER_STATE_RESOURCE_HERO_TOKENS=ConvertPlayerState(3)",
        description: "",

    },
    PLAYER_STATE_RESOURCE_FOOD_CAP: {
        completion: "constant playerstate PLAYER_STATE_RESOURCE_FOOD_CAP=ConvertPlayerState(4)",
        description: "",

    },
    PLAYER_STATE_RESOURCE_FOOD_USED: {
        completion: "constant playerstate PLAYER_STATE_RESOURCE_FOOD_USED=ConvertPlayerState(5)",
        description: "",

    },
    PLAYER_STATE_FOOD_CAP_CEILING: {
        completion: "constant playerstate PLAYER_STATE_FOOD_CAP_CEILING=ConvertPlayerState(6)",
        description: "",

    },
    PLAYER_STATE_GIVES_BOUNTY: {
        completion: "constant playerstate PLAYER_STATE_GIVES_BOUNTY=ConvertPlayerState(7)",
        description: "",

    },
    PLAYER_STATE_ALLIED_VICTORY: {
        completion: "constant playerstate PLAYER_STATE_ALLIED_VICTORY=ConvertPlayerState(8)",
        description: "",

    },
    PLAYER_STATE_PLACED: {
        completion: "constant playerstate PLAYER_STATE_PLACED=ConvertPlayerState(9)",
        description: "",

    },
    PLAYER_STATE_OBSERVER_ON_DEATH: {
        completion: "constant playerstate PLAYER_STATE_OBSERVER_ON_DEATH=ConvertPlayerState(10)",
        description: "",

    },
    PLAYER_STATE_OBSERVER: {
        completion: "constant playerstate PLAYER_STATE_OBSERVER=ConvertPlayerState(11)",
        description: "",

    },
    PLAYER_STATE_UNFOLLOWABLE: {
        completion: "constant playerstate PLAYER_STATE_UNFOLLOWABLE=ConvertPlayerState(12)",
        description: "",

    },
    PLAYER_STATE_GOLD_UPKEEP_RATE: {
        completion: "constant playerstate PLAYER_STATE_GOLD_UPKEEP_RATE=ConvertPlayerState(13)",
        description: "",

    },
    PLAYER_STATE_LUMBER_UPKEEP_RATE: {
        completion: "constant playerstate PLAYER_STATE_LUMBER_UPKEEP_RATE=ConvertPlayerState(14)",
        description: "",

    },
    PLAYER_STATE_GOLD_GATHERED: {
        completion: "constant playerstate PLAYER_STATE_GOLD_GATHERED=ConvertPlayerState(15)",
        description: "",

    },
    PLAYER_STATE_LUMBER_GATHERED: {
        completion: "constant playerstate PLAYER_STATE_LUMBER_GATHERED=ConvertPlayerState(16)",
        description: "",

    },
    PLAYER_STATE_NO_CREEP_SLEEP: {
        completion: "constant playerstate PLAYER_STATE_NO_CREEP_SLEEP=ConvertPlayerState(25)",
        description: "",

    },
    UNIT_STATE_LIFE: {
        completion: "constant unitstate UNIT_STATE_LIFE=ConvertUnitState(0)",
        description: "",

    },
    UNIT_STATE_MAX_LIFE: {
        completion: "constant unitstate UNIT_STATE_MAX_LIFE=ConvertUnitState(1)",
        description: "",

    },
    UNIT_STATE_MANA: {
        completion: "constant unitstate UNIT_STATE_MANA=ConvertUnitState(2)",
        description: "",

    },
    UNIT_STATE_MAX_MANA: {
        completion: "constant unitstate UNIT_STATE_MAX_MANA=ConvertUnitState(3)",
        description: "",

    },
    AI_DIFFICULTY_NEWBIE: {
        completion: "constant aidifficulty AI_DIFFICULTY_NEWBIE=ConvertAIDifficulty(0)",
        description: "",

    },
    AI_DIFFICULTY_NORMAL: {
        completion: "constant aidifficulty AI_DIFFICULTY_NORMAL=ConvertAIDifficulty(1)",
        description: "",

    },
    AI_DIFFICULTY_INSANE: {
        completion: "constant aidifficulty AI_DIFFICULTY_INSANE=ConvertAIDifficulty(2)",
        description: "",

    },
    PLAYER_SCORE_UNITS_TRAINED: {
        completion: "constant playerscore PLAYER_SCORE_UNITS_TRAINED=ConvertPlayerScore(0)",
        description: "",

    },
    PLAYER_SCORE_UNITS_KILLED: {
        completion: "constant playerscore PLAYER_SCORE_UNITS_KILLED=ConvertPlayerScore(1)",
        description: "",

    },
    PLAYER_SCORE_STRUCT_BUILT: {
        completion: "constant playerscore PLAYER_SCORE_STRUCT_BUILT=ConvertPlayerScore(2)",
        description: "",

    },
    PLAYER_SCORE_STRUCT_RAZED: {
        completion: "constant playerscore PLAYER_SCORE_STRUCT_RAZED=ConvertPlayerScore(3)",
        description: "",

    },
    PLAYER_SCORE_TECH_PERCENT: {
        completion: "constant playerscore PLAYER_SCORE_TECH_PERCENT=ConvertPlayerScore(4)",
        description: "",

    },
    PLAYER_SCORE_FOOD_MAXPROD: {
        completion: "constant playerscore PLAYER_SCORE_FOOD_MAXPROD=ConvertPlayerScore(5)",
        description: "",

    },
    PLAYER_SCORE_FOOD_MAXUSED: {
        completion: "constant playerscore PLAYER_SCORE_FOOD_MAXUSED=ConvertPlayerScore(6)",
        description: "",

    },
    PLAYER_SCORE_HEROES_KILLED: {
        completion: "constant playerscore PLAYER_SCORE_HEROES_KILLED=ConvertPlayerScore(7)",
        description: "",

    },
    PLAYER_SCORE_ITEMS_GAINED: {
        completion: "constant playerscore PLAYER_SCORE_ITEMS_GAINED=ConvertPlayerScore(8)",
        description: "",

    },
    PLAYER_SCORE_MERCS_HIRED: {
        completion: "constant playerscore PLAYER_SCORE_MERCS_HIRED=ConvertPlayerScore(9)",
        description: "",

    },
    PLAYER_SCORE_GOLD_MINED_TOTAL: {
        completion: "constant playerscore PLAYER_SCORE_GOLD_MINED_TOTAL=ConvertPlayerScore(10)",
        description: "",

    },
    PLAYER_SCORE_GOLD_MINED_UPKEEP: {
        completion: "constant playerscore PLAYER_SCORE_GOLD_MINED_UPKEEP=ConvertPlayerScore(11)",
        description: "",

    },
    PLAYER_SCORE_GOLD_LOST_UPKEEP: {
        completion: "constant playerscore PLAYER_SCORE_GOLD_LOST_UPKEEP=ConvertPlayerScore(12)",
        description: "",

    },
    PLAYER_SCORE_GOLD_LOST_TAX: {
        completion: "constant playerscore PLAYER_SCORE_GOLD_LOST_TAX=ConvertPlayerScore(13)",
        description: "",

    },
    PLAYER_SCORE_GOLD_GIVEN: {
        completion: "constant playerscore PLAYER_SCORE_GOLD_GIVEN=ConvertPlayerScore(14)",
        description: "",

    },
    PLAYER_SCORE_GOLD_RECEIVED: {
        completion: "constant playerscore PLAYER_SCORE_GOLD_RECEIVED=ConvertPlayerScore(15)",
        description: "",

    },
    PLAYER_SCORE_LUMBER_TOTAL: {
        completion: "constant playerscore PLAYER_SCORE_LUMBER_TOTAL=ConvertPlayerScore(16)",
        description: "",

    },
    PLAYER_SCORE_LUMBER_LOST_UPKEEP: {
        completion: "constant playerscore PLAYER_SCORE_LUMBER_LOST_UPKEEP=ConvertPlayerScore(17)",
        description: "",

    },
    PLAYER_SCORE_LUMBER_LOST_TAX: {
        completion: "constant playerscore PLAYER_SCORE_LUMBER_LOST_TAX=ConvertPlayerScore(18)",
        description: "",

    },
    PLAYER_SCORE_LUMBER_GIVEN: {
        completion: "constant playerscore PLAYER_SCORE_LUMBER_GIVEN=ConvertPlayerScore(19)",
        description: "",

    },
    PLAYER_SCORE_LUMBER_RECEIVED: {
        completion: "constant playerscore PLAYER_SCORE_LUMBER_RECEIVED=ConvertPlayerScore(20)",
        description: "",

    },
    PLAYER_SCORE_UNIT_TOTAL: {
        completion: "constant playerscore PLAYER_SCORE_UNIT_TOTAL=ConvertPlayerScore(21)",
        description: "",

    },
    PLAYER_SCORE_HERO_TOTAL: {
        completion: "constant playerscore PLAYER_SCORE_HERO_TOTAL=ConvertPlayerScore(22)",
        description: "",

    },
    PLAYER_SCORE_RESOURCE_TOTAL: {
        completion: "constant playerscore PLAYER_SCORE_RESOURCE_TOTAL=ConvertPlayerScore(23)",
        description: "",

    },
    PLAYER_SCORE_TOTAL: {
        completion: "constant playerscore PLAYER_SCORE_TOTAL=ConvertPlayerScore(24)",
        description: "",

    },
    EVENT_GAME_VICTORY: {
        completion: "constant gameevent EVENT_GAME_VICTORY=ConvertGameEvent(0)",
        description: "",

    },
    EVENT_GAME_END_LEVEL: {
        completion: "constant gameevent EVENT_GAME_END_LEVEL=ConvertGameEvent(1)",
        description: "",

    },
    EVENT_GAME_VARIABLE_LIMIT: {
        completion: "constant gameevent EVENT_GAME_VARIABLE_LIMIT=ConvertGameEvent(2)",
        description: "",

    },
    EVENT_GAME_STATE_LIMIT: {
        completion: "constant gameevent EVENT_GAME_STATE_LIMIT=ConvertGameEvent(3)",
        description: "",

    },
    EVENT_GAME_TIMER_EXPIRED: {
        completion: "constant gameevent EVENT_GAME_TIMER_EXPIRED=ConvertGameEvent(4)",
        description: "",

    },
    EVENT_GAME_ENTER_REGION: {
        completion: "constant gameevent EVENT_GAME_ENTER_REGION=ConvertGameEvent(5)",
        description: "",

    },
    EVENT_GAME_LEAVE_REGION: {
        completion: "constant gameevent EVENT_GAME_LEAVE_REGION=ConvertGameEvent(6)",
        description: "",

    },
    EVENT_GAME_TRACKABLE_HIT: {
        completion: "constant gameevent EVENT_GAME_TRACKABLE_HIT=ConvertGameEvent(7)",
        description: "",

    },
    EVENT_GAME_TRACKABLE_TRACK: {
        completion: "constant gameevent EVENT_GAME_TRACKABLE_TRACK=ConvertGameEvent(8)",
        description: "",

    },
    EVENT_GAME_SHOW_SKILL: {
        completion: "constant gameevent EVENT_GAME_SHOW_SKILL=ConvertGameEvent(9)",
        description: "",

    },
    EVENT_GAME_BUILD_SUBMENU: {
        completion: "constant gameevent EVENT_GAME_BUILD_SUBMENU=ConvertGameEvent(10)",
        description: "",

    },
    EVENT_PLAYER_STATE_LIMIT: {
        completion: "constant playerevent EVENT_PLAYER_STATE_LIMIT=ConvertPlayerEvent(11)",
        description: "",

    },
    EVENT_PLAYER_ALLIANCE_CHANGED: {
        completion: "constant playerevent EVENT_PLAYER_ALLIANCE_CHANGED=ConvertPlayerEvent(12)",
        description: "",

    },
    EVENT_PLAYER_DEFEAT: {
        completion: "constant playerevent EVENT_PLAYER_DEFEAT=ConvertPlayerEvent(13)",
        description: "",

    },
    EVENT_PLAYER_VICTORY: {
        completion: "constant playerevent EVENT_PLAYER_VICTORY=ConvertPlayerEvent(14)",
        description: "",

    },
    EVENT_PLAYER_LEAVE: {
        completion: "constant playerevent EVENT_PLAYER_LEAVE=ConvertPlayerEvent(15)",
        description: "",

    },
    EVENT_PLAYER_CHAT: {
        completion: "constant playerevent EVENT_PLAYER_CHAT=ConvertPlayerEvent(16)",
        description: "",

    },
    EVENT_PLAYER_END_CINEMATIC: {
        completion: "constant playerevent EVENT_PLAYER_END_CINEMATIC=ConvertPlayerEvent(17)",
        description: "",

    },
    EVENT_PLAYER_UNIT_ATTACKED: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_ATTACKED=ConvertPlayerUnitEvent(18)",
        description: "",

    },
    EVENT_PLAYER_UNIT_RESCUED: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_RESCUED=ConvertPlayerUnitEvent(19)",
        description: "",

    },
    EVENT_PLAYER_UNIT_DEATH: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_DEATH=ConvertPlayerUnitEvent(20)",
        description: "",

    },
    EVENT_PLAYER_UNIT_DECAY: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_DECAY=ConvertPlayerUnitEvent(21)",
        description: "",

    },
    EVENT_PLAYER_UNIT_DETECTED: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_DETECTED=ConvertPlayerUnitEvent(22)",
        description: "",

    },
    EVENT_PLAYER_UNIT_HIDDEN: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_HIDDEN=ConvertPlayerUnitEvent(23)",
        description: "",

    },
    EVENT_PLAYER_UNIT_SELECTED: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_SELECTED=ConvertPlayerUnitEvent(24)",
        description: "",

    },
    EVENT_PLAYER_UNIT_DESELECTED: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_DESELECTED=ConvertPlayerUnitEvent(25)",
        description: "",

    },
    EVENT_PLAYER_UNIT_CONSTRUCT_START: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_CONSTRUCT_START=ConvertPlayerUnitEvent(26)",
        description: "",

    },
    EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL=ConvertPlayerUnitEvent(27)",
        description: "",

    },
    EVENT_PLAYER_UNIT_CONSTRUCT_FINISH: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_CONSTRUCT_FINISH=ConvertPlayerUnitEvent(28)",
        description: "",

    },
    EVENT_PLAYER_UNIT_UPGRADE_START: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_UPGRADE_START=ConvertPlayerUnitEvent(29)",
        description: "",

    },
    EVENT_PLAYER_UNIT_UPGRADE_CANCEL: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_UPGRADE_CANCEL=ConvertPlayerUnitEvent(30)",
        description: "",

    },
    EVENT_PLAYER_UNIT_UPGRADE_FINISH: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_UPGRADE_FINISH=ConvertPlayerUnitEvent(31)",
        description: "",

    },
    EVENT_PLAYER_UNIT_TRAIN_START: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_TRAIN_START=ConvertPlayerUnitEvent(32)",
        description: "",

    },
    EVENT_PLAYER_UNIT_TRAIN_CANCEL: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_TRAIN_CANCEL=ConvertPlayerUnitEvent(33)",
        description: "",

    },
    EVENT_PLAYER_UNIT_TRAIN_FINISH: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_TRAIN_FINISH=ConvertPlayerUnitEvent(34)",
        description: "",

    },
    EVENT_PLAYER_UNIT_RESEARCH_START: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_RESEARCH_START=ConvertPlayerUnitEvent(35)",
        description: "",

    },
    EVENT_PLAYER_UNIT_RESEARCH_CANCEL: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_RESEARCH_CANCEL=ConvertPlayerUnitEvent(36)",
        description: "",

    },
    EVENT_PLAYER_UNIT_RESEARCH_FINISH: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_RESEARCH_FINISH=ConvertPlayerUnitEvent(37)",
        description: "",

    },
    EVENT_PLAYER_UNIT_ISSUED_ORDER: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_ISSUED_ORDER=ConvertPlayerUnitEvent(38)",
        description: "",

    },
    EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER=ConvertPlayerUnitEvent(39)",
        description: "",

    },
    EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER=ConvertPlayerUnitEvent(40)",
        description: "",

    },
    EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER=ConvertPlayerUnitEvent(40)",
        description: "",

    },
    EVENT_PLAYER_HERO_LEVEL: {
        completion: "constant playerunitevent EVENT_PLAYER_HERO_LEVEL=ConvertPlayerUnitEvent(41)",
        description: "",

    },
    EVENT_PLAYER_HERO_SKILL: {
        completion: "constant playerunitevent EVENT_PLAYER_HERO_SKILL=ConvertPlayerUnitEvent(42)",
        description: "",

    },
    EVENT_PLAYER_HERO_REVIVABLE: {
        completion: "constant playerunitevent EVENT_PLAYER_HERO_REVIVABLE=ConvertPlayerUnitEvent(43)",
        description: "",

    },
    EVENT_PLAYER_HERO_REVIVE_START: {
        completion: "constant playerunitevent EVENT_PLAYER_HERO_REVIVE_START=ConvertPlayerUnitEvent(44)",
        description: "",

    },
    EVENT_PLAYER_HERO_REVIVE_CANCEL: {
        completion: "constant playerunitevent EVENT_PLAYER_HERO_REVIVE_CANCEL=ConvertPlayerUnitEvent(45)",
        description: "",

    },
    EVENT_PLAYER_HERO_REVIVE_FINISH: {
        completion: "constant playerunitevent EVENT_PLAYER_HERO_REVIVE_FINISH=ConvertPlayerUnitEvent(46)",
        description: "",

    },
    EVENT_PLAYER_UNIT_SUMMON: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_SUMMON=ConvertPlayerUnitEvent(47)",
        description: "",

    },
    EVENT_PLAYER_UNIT_DROP_ITEM: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_DROP_ITEM=ConvertPlayerUnitEvent(48)",
        description: "",

    },
    EVENT_PLAYER_UNIT_PICKUP_ITEM: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_PICKUP_ITEM=ConvertPlayerUnitEvent(49)",
        description: "",

    },
    EVENT_PLAYER_UNIT_USE_ITEM: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_USE_ITEM=ConvertPlayerUnitEvent(50)",
        description: "",

    },
    EVENT_PLAYER_UNIT_LOADED: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_LOADED=ConvertPlayerUnitEvent(51)",
        description: "",

    },
    EVENT_UNIT_DAMAGED: {
        completion: "constant unitevent EVENT_UNIT_DAMAGED=ConvertUnitEvent(52)",
        description: "",

    },
    EVENT_UNIT_DEATH: {
        completion: "constant unitevent EVENT_UNIT_DEATH=ConvertUnitEvent(53)",
        description: "",

    },
    EVENT_UNIT_DECAY: {
        completion: "constant unitevent EVENT_UNIT_DECAY=ConvertUnitEvent(54)",
        description: "",

    },
    EVENT_UNIT_DETECTED: {
        completion: "constant unitevent EVENT_UNIT_DETECTED=ConvertUnitEvent(55)",
        description: "",

    },
    EVENT_UNIT_HIDDEN: {
        completion: "constant unitevent EVENT_UNIT_HIDDEN=ConvertUnitEvent(56)",
        description: "",

    },
    EVENT_UNIT_SELECTED: {
        completion: "constant unitevent EVENT_UNIT_SELECTED=ConvertUnitEvent(57)",
        description: "",

    },
    EVENT_UNIT_DESELECTED: {
        completion: "constant unitevent EVENT_UNIT_DESELECTED=ConvertUnitEvent(58)",
        description: "",

    },
    EVENT_UNIT_STATE_LIMIT: {
        completion: "constant unitevent EVENT_UNIT_STATE_LIMIT=ConvertUnitEvent(59)",
        description: "",

    },
    EVENT_UNIT_ACQUIRED_TARGET: {
        completion: "constant unitevent EVENT_UNIT_ACQUIRED_TARGET=ConvertUnitEvent(60)",
        description: "",

    },
    EVENT_UNIT_TARGET_IN_RANGE: {
        completion: "constant unitevent EVENT_UNIT_TARGET_IN_RANGE=ConvertUnitEvent(61)",
        description: "",

    },
    EVENT_UNIT_ATTACKED: {
        completion: "constant unitevent EVENT_UNIT_ATTACKED=ConvertUnitEvent(62)",
        description: "",

    },
    EVENT_UNIT_RESCUED: {
        completion: "constant unitevent EVENT_UNIT_RESCUED=ConvertUnitEvent(63)",
        description: "",

    },
    EVENT_UNIT_CONSTRUCT_CANCEL: {
        completion: "constant unitevent EVENT_UNIT_CONSTRUCT_CANCEL=ConvertUnitEvent(64)",
        description: "",

    },
    EVENT_UNIT_CONSTRUCT_FINISH: {
        completion: "constant unitevent EVENT_UNIT_CONSTRUCT_FINISH=ConvertUnitEvent(65)",
        description: "",

    },
    EVENT_UNIT_UPGRADE_START: {
        completion: "constant unitevent EVENT_UNIT_UPGRADE_START=ConvertUnitEvent(66)",
        description: "",

    },
    EVENT_UNIT_UPGRADE_CANCEL: {
        completion: "constant unitevent EVENT_UNIT_UPGRADE_CANCEL=ConvertUnitEvent(67)",
        description: "",

    },
    EVENT_UNIT_UPGRADE_FINISH: {
        completion: "constant unitevent EVENT_UNIT_UPGRADE_FINISH=ConvertUnitEvent(68)",
        description: "",

    },
    EVENT_UNIT_TRAIN_START: {
        completion: "constant unitevent EVENT_UNIT_TRAIN_START=ConvertUnitEvent(69)",
        description: "",

    },
    EVENT_UNIT_TRAIN_CANCEL: {
        completion: "constant unitevent EVENT_UNIT_TRAIN_CANCEL=ConvertUnitEvent(70)",
        description: "",

    },
    EVENT_UNIT_TRAIN_FINISH: {
        completion: "constant unitevent EVENT_UNIT_TRAIN_FINISH=ConvertUnitEvent(71)",
        description: "",

    },
    EVENT_UNIT_RESEARCH_START: {
        completion: "constant unitevent EVENT_UNIT_RESEARCH_START=ConvertUnitEvent(72)",
        description: "",

    },
    EVENT_UNIT_RESEARCH_CANCEL: {
        completion: "constant unitevent EVENT_UNIT_RESEARCH_CANCEL=ConvertUnitEvent(73)",
        description: "",

    },
    EVENT_UNIT_RESEARCH_FINISH: {
        completion: "constant unitevent EVENT_UNIT_RESEARCH_FINISH=ConvertUnitEvent(74)",
        description: "",

    },
    EVENT_UNIT_ISSUED_ORDER: {
        completion: "constant unitevent EVENT_UNIT_ISSUED_ORDER=ConvertUnitEvent(75)",
        description: "",

    },
    EVENT_UNIT_ISSUED_POINT_ORDER: {
        completion: "constant unitevent EVENT_UNIT_ISSUED_POINT_ORDER=ConvertUnitEvent(76)",
        description: "",

    },
    EVENT_UNIT_ISSUED_TARGET_ORDER: {
        completion: "constant unitevent EVENT_UNIT_ISSUED_TARGET_ORDER=ConvertUnitEvent(77)",
        description: "",

    },
    EVENT_UNIT_HERO_LEVEL: {
        completion: "constant unitevent EVENT_UNIT_HERO_LEVEL=ConvertUnitEvent(78)",
        description: "",

    },
    EVENT_UNIT_HERO_SKILL: {
        completion: "constant unitevent EVENT_UNIT_HERO_SKILL=ConvertUnitEvent(79)",
        description: "",

    },
    EVENT_UNIT_HERO_REVIVABLE: {
        completion: "constant unitevent EVENT_UNIT_HERO_REVIVABLE=ConvertUnitEvent(80)",
        description: "",

    },
    EVENT_UNIT_HERO_REVIVE_START: {
        completion: "constant unitevent EVENT_UNIT_HERO_REVIVE_START=ConvertUnitEvent(81)",
        description: "",

    },
    EVENT_UNIT_HERO_REVIVE_CANCEL: {
        completion: "constant unitevent EVENT_UNIT_HERO_REVIVE_CANCEL=ConvertUnitEvent(82)",
        description: "",

    },
    EVENT_UNIT_HERO_REVIVE_FINISH: {
        completion: "constant unitevent EVENT_UNIT_HERO_REVIVE_FINISH=ConvertUnitEvent(83)",
        description: "",

    },
    EVENT_UNIT_SUMMON: {
        completion: "constant unitevent EVENT_UNIT_SUMMON=ConvertUnitEvent(84)",
        description: "",

    },
    EVENT_UNIT_DROP_ITEM: {
        completion: "constant unitevent EVENT_UNIT_DROP_ITEM=ConvertUnitEvent(85)",
        description: "",

    },
    EVENT_UNIT_PICKUP_ITEM: {
        completion: "constant unitevent EVENT_UNIT_PICKUP_ITEM=ConvertUnitEvent(86)",
        description: "",

    },
    EVENT_UNIT_USE_ITEM: {
        completion: "constant unitevent EVENT_UNIT_USE_ITEM=ConvertUnitEvent(87)",
        description: "",

    },
    EVENT_UNIT_LOADED: {
        completion: "constant unitevent EVENT_UNIT_LOADED=ConvertUnitEvent(88)",
        description: "",

    },
    EVENT_WIDGET_DEATH: {
        completion: "constant widgetevent EVENT_WIDGET_DEATH=ConvertWidgetEvent(89)",
        description: "",

    },
    EVENT_DIALOG_BUTTON_CLICK: {
        completion: "constant dialogevent EVENT_DIALOG_BUTTON_CLICK=ConvertDialogEvent(90)",
        description: "",

    },
    EVENT_DIALOG_CLICK: {
        completion: "constant dialogevent EVENT_DIALOG_CLICK=ConvertDialogEvent(91)",
        description: "",

    },
    EVENT_GAME_LOADED: {
        completion: "constant gameevent EVENT_GAME_LOADED=ConvertGameEvent(256)",
        description: "",

    },
    EVENT_GAME_TOURNAMENT_FINISH_SOON: {
        completion: "constant gameevent EVENT_GAME_TOURNAMENT_FINISH_SOON=ConvertGameEvent(257)",
        description: "",

    },
    EVENT_GAME_TOURNAMENT_FINISH_NOW: {
        completion: "constant gameevent EVENT_GAME_TOURNAMENT_FINISH_NOW=ConvertGameEvent(258)",
        description: "",

    },
    EVENT_GAME_SAVE: {
        completion: "constant gameevent EVENT_GAME_SAVE=ConvertGameEvent(259)",
        description: "",

    },
    EVENT_PLAYER_ARROW_LEFT_DOWN: {
        completion: "constant playerevent EVENT_PLAYER_ARROW_LEFT_DOWN=ConvertPlayerEvent(261)",
        description: "",

    },
    EVENT_PLAYER_ARROW_LEFT_UP: {
        completion: "constant playerevent EVENT_PLAYER_ARROW_LEFT_UP=ConvertPlayerEvent(262)",
        description: "",

    },
    EVENT_PLAYER_ARROW_RIGHT_DOWN: {
        completion: "constant playerevent EVENT_PLAYER_ARROW_RIGHT_DOWN=ConvertPlayerEvent(263)",
        description: "",

    },
    EVENT_PLAYER_ARROW_RIGHT_UP: {
        completion: "constant playerevent EVENT_PLAYER_ARROW_RIGHT_UP=ConvertPlayerEvent(264)",
        description: "",

    },
    EVENT_PLAYER_ARROW_DOWN_DOWN: {
        completion: "constant playerevent EVENT_PLAYER_ARROW_DOWN_DOWN=ConvertPlayerEvent(265)",
        description: "",

    },
    EVENT_PLAYER_ARROW_DOWN_UP: {
        completion: "constant playerevent EVENT_PLAYER_ARROW_DOWN_UP=ConvertPlayerEvent(266)",
        description: "",

    },
    EVENT_PLAYER_ARROW_UP_DOWN: {
        completion: "constant playerevent EVENT_PLAYER_ARROW_UP_DOWN=ConvertPlayerEvent(267)",
        description: "",

    },
    EVENT_PLAYER_ARROW_UP_UP: {
        completion: "constant playerevent EVENT_PLAYER_ARROW_UP_UP=ConvertPlayerEvent(268)",
        description: "",

    },
    EVENT_PLAYER_MOUSE_DOWN: {
        completion: "constant playerevent EVENT_PLAYER_MOUSE_DOWN=ConvertPlayerEvent(305)",
        description: "",

    },
    EVENT_PLAYER_MOUSE_UP: {
        completion: "constant playerevent EVENT_PLAYER_MOUSE_UP=ConvertPlayerEvent(306)",
        description: "",

    },
    EVENT_PLAYER_MOUSE_MOVE: {
        completion: "constant playerevent EVENT_PLAYER_MOUSE_MOVE=ConvertPlayerEvent(307)",
        description: "",

    },
    EVENT_PLAYER_UNIT_SELL: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_SELL=ConvertPlayerUnitEvent(269)",
        description: "",

    },
    EVENT_PLAYER_UNIT_CHANGE_OWNER: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_CHANGE_OWNER=ConvertPlayerUnitEvent(270)",
        description: "",

    },
    EVENT_PLAYER_UNIT_SELL_ITEM: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_SELL_ITEM=ConvertPlayerUnitEvent(271)",
        description: "",

    },
    EVENT_PLAYER_UNIT_SPELL_CHANNEL: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_SPELL_CHANNEL=ConvertPlayerUnitEvent(272)",
        description: "",

    },
    EVENT_PLAYER_UNIT_SPELL_CAST: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_SPELL_CAST=ConvertPlayerUnitEvent(273)",
        description: "",

    },
    EVENT_PLAYER_UNIT_SPELL_EFFECT: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_SPELL_EFFECT=ConvertPlayerUnitEvent(274)",
        description: "",

    },
    EVENT_PLAYER_UNIT_SPELL_FINISH: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_SPELL_FINISH=ConvertPlayerUnitEvent(275)",
        description: "",

    },
    EVENT_PLAYER_UNIT_SPELL_ENDCAST: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_SPELL_ENDCAST=ConvertPlayerUnitEvent(276)",
        description: "",

    },
    EVENT_PLAYER_UNIT_PAWN_ITEM: {
        completion: "constant playerunitevent EVENT_PLAYER_UNIT_PAWN_ITEM=ConvertPlayerUnitEvent(277)",
        description: "",

    },
    EVENT_UNIT_SELL: {
        completion: "constant unitevent EVENT_UNIT_SELL=ConvertUnitEvent(286)",
        description: "",

    },
    EVENT_UNIT_CHANGE_OWNER: {
        completion: "constant unitevent EVENT_UNIT_CHANGE_OWNER=ConvertUnitEvent(287)",
        description: "",

    },
    EVENT_UNIT_SELL_ITEM: {
        completion: "constant unitevent EVENT_UNIT_SELL_ITEM=ConvertUnitEvent(288)",
        description: "",

    },
    EVENT_UNIT_SPELL_CHANNEL: {
        completion: "constant unitevent EVENT_UNIT_SPELL_CHANNEL=ConvertUnitEvent(289)",
        description: "",

    },
    EVENT_UNIT_SPELL_CAST: {
        completion: "constant unitevent EVENT_UNIT_SPELL_CAST=ConvertUnitEvent(290)",
        description: "",

    },
    EVENT_UNIT_SPELL_EFFECT: {
        completion: "constant unitevent EVENT_UNIT_SPELL_EFFECT=ConvertUnitEvent(291)",
        description: "",

    },
    EVENT_UNIT_SPELL_FINISH: {
        completion: "constant unitevent EVENT_UNIT_SPELL_FINISH=ConvertUnitEvent(292)",
        description: "",

    },
    EVENT_UNIT_SPELL_ENDCAST: {
        completion: "constant unitevent EVENT_UNIT_SPELL_ENDCAST=ConvertUnitEvent(293)",
        description: "",

    },
    EVENT_UNIT_PAWN_ITEM: {
        completion: "constant unitevent EVENT_UNIT_PAWN_ITEM=ConvertUnitEvent(294)",
        description: "",

    },
    LESS_THAN: {
        completion: "constant limitop LESS_THAN=ConvertLimitOp(0)",
        description: "",

    },
    LESS_THAN_OR_EQUAL: {
        completion: "constant limitop LESS_THAN_OR_EQUAL=ConvertLimitOp(1)",
        description: "",

    },
    EQUAL: {
        completion: "constant limitop EQUAL=ConvertLimitOp(2)",
        description: "",

    },
    GREATER_THAN_OR_EQUAL: {
        completion: "constant limitop GREATER_THAN_OR_EQUAL=ConvertLimitOp(3)",
        description: "",

    },
    GREATER_THAN: {
        completion: "constant limitop GREATER_THAN=ConvertLimitOp(4)",
        description: "",

    },
    NOT_EQUAL: {
        completion: "constant limitop NOT_EQUAL=ConvertLimitOp(5)",
        description: "",

    },
    UNIT_TYPE_HERO: {
        completion: "constant unittype UNIT_TYPE_HERO=ConvertUnitType(0)",
        description: "",

    },
    UNIT_TYPE_DEAD: {
        completion: "constant unittype UNIT_TYPE_DEAD=ConvertUnitType(1)",
        description: "",

    },
    UNIT_TYPE_STRUCTURE: {
        completion: "constant unittype UNIT_TYPE_STRUCTURE=ConvertUnitType(2)",
        description: "",

    },
    UNIT_TYPE_FLYING: {
        completion: "constant unittype UNIT_TYPE_FLYING=ConvertUnitType(3)",
        description: "",

    },
    UNIT_TYPE_GROUND: {
        completion: "constant unittype UNIT_TYPE_GROUND=ConvertUnitType(4)",
        description: "",

    },
    UNIT_TYPE_ATTACKS_FLYING: {
        completion: "constant unittype UNIT_TYPE_ATTACKS_FLYING=ConvertUnitType(5)",
        description: "",

    },
    UNIT_TYPE_ATTACKS_GROUND: {
        completion: "constant unittype UNIT_TYPE_ATTACKS_GROUND=ConvertUnitType(6)",
        description: "",

    },
    UNIT_TYPE_MELEE_ATTACKER: {
        completion: "constant unittype UNIT_TYPE_MELEE_ATTACKER=ConvertUnitType(7)",
        description: "",

    },
    UNIT_TYPE_RANGED_ATTACKER: {
        completion: "constant unittype UNIT_TYPE_RANGED_ATTACKER=ConvertUnitType(8)",
        description: "",

    },
    UNIT_TYPE_GIANT: {
        completion: "constant unittype UNIT_TYPE_GIANT=ConvertUnitType(9)",
        description: "",

    },
    UNIT_TYPE_SUMMONED: {
        completion: "constant unittype UNIT_TYPE_SUMMONED=ConvertUnitType(10)",
        description: "",

    },
    UNIT_TYPE_STUNNED: {
        completion: "constant unittype UNIT_TYPE_STUNNED=ConvertUnitType(11)",
        description: "",

    },
    UNIT_TYPE_PLAGUED: {
        completion: "constant unittype UNIT_TYPE_PLAGUED=ConvertUnitType(12)",
        description: "",

    },
    UNIT_TYPE_SNARED: {
        completion: "constant unittype UNIT_TYPE_SNARED=ConvertUnitType(13)",
        description: "",

    },
    UNIT_TYPE_UNDEAD: {
        completion: "constant unittype UNIT_TYPE_UNDEAD=ConvertUnitType(14)",
        description: "",

    },
    UNIT_TYPE_MECHANICAL: {
        completion: "constant unittype UNIT_TYPE_MECHANICAL=ConvertUnitType(15)",
        description: "",

    },
    UNIT_TYPE_PEON: {
        completion: "constant unittype UNIT_TYPE_PEON=ConvertUnitType(16)",
        description: "",

    },
    UNIT_TYPE_SAPPER: {
        completion: "constant unittype UNIT_TYPE_SAPPER=ConvertUnitType(17)",
        description: "",

    },
    UNIT_TYPE_TOWNHALL: {
        completion: "constant unittype UNIT_TYPE_TOWNHALL=ConvertUnitType(18)",
        description: "",

    },
    UNIT_TYPE_ANCIENT: {
        completion: "constant unittype UNIT_TYPE_ANCIENT=ConvertUnitType(19)",
        description: "",

    },
    UNIT_TYPE_TAUREN: {
        completion: "constant unittype UNIT_TYPE_TAUREN=ConvertUnitType(20)",
        description: "",

    },
    UNIT_TYPE_POISONED: {
        completion: "constant unittype UNIT_TYPE_POISONED=ConvertUnitType(21)",
        description: "",

    },
    UNIT_TYPE_POLYMORPHED: {
        completion: "constant unittype UNIT_TYPE_POLYMORPHED=ConvertUnitType(22)",
        description: "",

    },
    UNIT_TYPE_SLEEPING: {
        completion: "constant unittype UNIT_TYPE_SLEEPING=ConvertUnitType(23)",
        description: "",

    },
    UNIT_TYPE_RESISTANT: {
        completion: "constant unittype UNIT_TYPE_RESISTANT=ConvertUnitType(24)",
        description: "",

    },
    UNIT_TYPE_ETHEREAL: {
        completion: "constant unittype UNIT_TYPE_ETHEREAL=ConvertUnitType(25)",
        description: "",

    },
    UNIT_TYPE_MAGIC_IMMUNE: {
        completion: "constant unittype UNIT_TYPE_MAGIC_IMMUNE=ConvertUnitType(26)",
        description: "",

    },
    ITEM_TYPE_PERMANENT: {
        completion: "constant itemtype ITEM_TYPE_PERMANENT=ConvertItemType(0)",
        description: "",

    },
    ITEM_TYPE_CHARGED: {
        completion: "constant itemtype ITEM_TYPE_CHARGED=ConvertItemType(1)",
        description: "",

    },
    ITEM_TYPE_POWERUP: {
        completion: "constant itemtype ITEM_TYPE_POWERUP=ConvertItemType(2)",
        description: "",

    },
    ITEM_TYPE_ARTIFACT: {
        completion: "constant itemtype ITEM_TYPE_ARTIFACT=ConvertItemType(3)",
        description: "",

    },
    ITEM_TYPE_PURCHASABLE: {
        completion: "constant itemtype ITEM_TYPE_PURCHASABLE=ConvertItemType(4)",
        description: "",

    },
    ITEM_TYPE_CAMPAIGN: {
        completion: "constant itemtype ITEM_TYPE_CAMPAIGN=ConvertItemType(5)",
        description: "",

    },
    ITEM_TYPE_MISCELLANEOUS: {
        completion: "constant itemtype ITEM_TYPE_MISCELLANEOUS=ConvertItemType(6)",
        description: "",

    },
    ITEM_TYPE_UNKNOWN: {
        completion: "constant itemtype ITEM_TYPE_UNKNOWN=ConvertItemType(7)",
        description: "",

    },
    ITEM_TYPE_ANY: {
        completion: "constant itemtype ITEM_TYPE_ANY=ConvertItemType(8)",
        description: "",

    },
    ITEM_TYPE_TOME: {
        completion: "constant itemtype ITEM_TYPE_TOME=ConvertItemType(2)",
        description: "",

    },
    CAMERA_FIELD_TARGET_DISTANCE: {
        completion: "constant camerafield CAMERA_FIELD_TARGET_DISTANCE=ConvertCameraField(0)",
        description: "",

    },
    CAMERA_FIELD_FARZ: {
        completion: "constant camerafield CAMERA_FIELD_FARZ=ConvertCameraField(1)",
        description: "",

    },
    CAMERA_FIELD_ANGLE_OF_ATTACK: {
        completion: "constant camerafield CAMERA_FIELD_ANGLE_OF_ATTACK=ConvertCameraField(2)",
        description: "",

    },
    CAMERA_FIELD_FIELD_OF_VIEW: {
        completion: "constant camerafield CAMERA_FIELD_FIELD_OF_VIEW=ConvertCameraField(3)",
        description: "",

    },
    CAMERA_FIELD_ROLL: {
        completion: "constant camerafield CAMERA_FIELD_ROLL=ConvertCameraField(4)",
        description: "",

    },
    CAMERA_FIELD_ROTATION: {
        completion: "constant camerafield CAMERA_FIELD_ROTATION=ConvertCameraField(5)",
        description: "",

    },
    CAMERA_FIELD_ZOFFSET: {
        completion: "constant camerafield CAMERA_FIELD_ZOFFSET=ConvertCameraField(6)",
        description: "",

    },
    BLEND_MODE_NONE: {
        completion: "constant blendmode BLEND_MODE_NONE=ConvertBlendMode(0)",
        description: "",

    },
    BLEND_MODE_DONT_CARE: {
        completion: "constant blendmode BLEND_MODE_DONT_CARE=ConvertBlendMode(0)",
        description: "",

    },
    BLEND_MODE_KEYALPHA: {
        completion: "constant blendmode BLEND_MODE_KEYALPHA=ConvertBlendMode(1)",
        description: "",

    },
    BLEND_MODE_BLEND: {
        completion: "constant blendmode BLEND_MODE_BLEND=ConvertBlendMode(2)",
        description: "",

    },
    BLEND_MODE_ADDITIVE: {
        completion: "constant blendmode BLEND_MODE_ADDITIVE=ConvertBlendMode(3)",
        description: "",

    },
    BLEND_MODE_MODULATE: {
        completion: "constant blendmode BLEND_MODE_MODULATE=ConvertBlendMode(4)",
        description: "",

    },
    BLEND_MODE_MODULATE_2X: {
        completion: "constant blendmode BLEND_MODE_MODULATE_2X=ConvertBlendMode(5)",
        description: "",

    },
    RARITY_FREQUENT: {
        completion: "constant raritycontrol RARITY_FREQUENT=ConvertRarityControl(0)",
        description: "",

    },
    RARITY_RARE: {
        completion: "constant raritycontrol RARITY_RARE=ConvertRarityControl(1)",
        description: "",

    },
    TEXMAP_FLAG_NONE: {
        completion: "constant texmapflags TEXMAP_FLAG_NONE=ConvertTexMapFlags(0)",
        description: "",

    },
    TEXMAP_FLAG_WRAP_U: {
        completion: "constant texmapflags TEXMAP_FLAG_WRAP_U=ConvertTexMapFlags(1)",
        description: "",

    },
    TEXMAP_FLAG_WRAP_V: {
        completion: "constant texmapflags TEXMAP_FLAG_WRAP_V=ConvertTexMapFlags(2)",
        description: "",

    },
    TEXMAP_FLAG_WRAP_UV: {
        completion: "constant texmapflags TEXMAP_FLAG_WRAP_UV=ConvertTexMapFlags(3)",
        description: "",

    },
    FOG_OF_WAR_MASKED: {
        completion: "constant fogstate FOG_OF_WAR_MASKED=ConvertFogState(1)",
        description: "",

    },
    FOG_OF_WAR_FOGGED: {
        completion: "constant fogstate FOG_OF_WAR_FOGGED=ConvertFogState(2)",
        description: "",

    },
    FOG_OF_WAR_VISIBLE: {
        completion: "constant fogstate FOG_OF_WAR_VISIBLE=ConvertFogState(4)",
        description: "",

    },
    CAMERA_MARGIN_LEFT: {
        completion: "constant integer CAMERA_MARGIN_LEFT=0",
        description: "",

    },
    CAMERA_MARGIN_RIGHT: {
        completion: "constant integer CAMERA_MARGIN_RIGHT=1",
        description: "",

    },
    CAMERA_MARGIN_TOP: {
        completion: "constant integer CAMERA_MARGIN_TOP=2",
        description: "",

    },
    CAMERA_MARGIN_BOTTOM: {
        completion: "constant integer CAMERA_MARGIN_BOTTOM=3",
        description: "",

    },
    EFFECT_TYPE_EFFECT: {
        completion: "constant effecttype EFFECT_TYPE_EFFECT=ConvertEffectType(0)",
        description: "",

    },
    EFFECT_TYPE_TARGET: {
        completion: "constant effecttype EFFECT_TYPE_TARGET=ConvertEffectType(1)",
        description: "",

    },
    EFFECT_TYPE_CASTER: {
        completion: "constant effecttype EFFECT_TYPE_CASTER=ConvertEffectType(2)",
        description: "",

    },
    EFFECT_TYPE_SPECIAL: {
        completion: "constant effecttype EFFECT_TYPE_SPECIAL=ConvertEffectType(3)",
        description: "",

    },
    EFFECT_TYPE_AREA_EFFECT: {
        completion: "constant effecttype EFFECT_TYPE_AREA_EFFECT=ConvertEffectType(4)",
        description: "",

    },
    EFFECT_TYPE_MISSILE: {
        completion: "constant effecttype EFFECT_TYPE_MISSILE=ConvertEffectType(5)",
        description: "",

    },
    EFFECT_TYPE_LIGHTNING: {
        completion: "constant effecttype EFFECT_TYPE_LIGHTNING=ConvertEffectType(6)",
        description: "",

    },
    SOUND_TYPE_EFFECT: {
        completion: "constant soundtype SOUND_TYPE_EFFECT=ConvertSoundType(0)",
        description: "",

    },
    SOUND_TYPE_EFFECT_LOOPED: {
        completion: "constant soundtype SOUND_TYPE_EFFECT_LOOPED=ConvertSoundType(1)",
        description: "",

    },
    bj_PI: {
        completion: "constant real bj_PI=3.14159",
        description: "",

    },
    bj_E: {
        completion: "constant real bj_E=2.71828",
        description: "",

    },
    bj_CELLWIDTH: {
        completion: "constant real bj_CELLWIDTH=128.0",
        description: "",

    },
    bj_CLIFFHEIGHT: {
        completion: "constant real bj_CLIFFHEIGHT=128.0",
        description: "",

    },
    bj_UNIT_FACING: {
        completion: "constant real bj_UNIT_FACING=270.0",
        description: "",

    },
    bj_RADTODEG: {
        completion: "constant real bj_RADTODEG=180.0/bj_PI",
        description: "",

    },
    bj_DEGTORAD: {
        completion: "constant real bj_DEGTORAD=bj_PI/180.0",
        description: "",

    },
    bj_TEXT_DELAY_QUEST: {
        completion: "constant real bj_TEXT_DELAY_QUEST=20.00",
        description: "",

    },
    bj_TEXT_DELAY_QUESTUPDATE: {
        completion: "constant real bj_TEXT_DELAY_QUESTUPDATE=20.00",
        description: "",

    },
    bj_TEXT_DELAY_QUESTDONE: {
        completion: "constant real bj_TEXT_DELAY_QUESTDONE=20.00",
        description: "",

    },
    bj_TEXT_DELAY_QUESTFAILED: {
        completion: "constant real bj_TEXT_DELAY_QUESTFAILED=20.00",
        description: "",

    },
    bj_TEXT_DELAY_QUESTREQUIREMENT: {
        completion: "constant real bj_TEXT_DELAY_QUESTREQUIREMENT=20.00",
        description: "",

    },
    bj_TEXT_DELAY_MISSIONFAILED: {
        completion: "constant real bj_TEXT_DELAY_MISSIONFAILED=20.00",
        description: "",

    },
    bj_TEXT_DELAY_ALWAYSHINT: {
        completion: "constant real bj_TEXT_DELAY_ALWAYSHINT=12.00",
        description: "",

    },
    bj_TEXT_DELAY_HINT: {
        completion: "constant real bj_TEXT_DELAY_HINT=12.00",
        description: "",

    },
    bj_TEXT_DELAY_SECRET: {
        completion: "constant real bj_TEXT_DELAY_SECRET=10.00",
        description: "",

    },
    bj_TEXT_DELAY_UNITACQUIRED: {
        completion: "constant real bj_TEXT_DELAY_UNITACQUIRED=15.00",
        description: "",

    },
    bj_TEXT_DELAY_UNITAVAILABLE: {
        completion: "constant real bj_TEXT_DELAY_UNITAVAILABLE=10.00",
        description: "",

    },
    bj_TEXT_DELAY_ITEMACQUIRED: {
        completion: "constant real bj_TEXT_DELAY_ITEMACQUIRED=10.00",
        description: "",

    },
    bj_TEXT_DELAY_WARNING: {
        completion: "constant real bj_TEXT_DELAY_WARNING=12.00",
        description: "",

    },
    bj_QUEUE_DELAY_QUEST: {
        completion: "constant real bj_QUEUE_DELAY_QUEST=5.00",
        description: "",

    },
    bj_QUEUE_DELAY_HINT: {
        completion: "constant real bj_QUEUE_DELAY_HINT=5.00",
        description: "",

    },
    bj_QUEUE_DELAY_SECRET: {
        completion: "constant real bj_QUEUE_DELAY_SECRET=3.00",
        description: "",

    },
    bj_HANDICAP_EASY: {
        completion: "constant real bj_HANDICAP_EASY=60.00",
        description: "",

    },
    bj_GAME_STARTED_THRESHOLD: {
        completion: "constant real bj_GAME_STARTED_THRESHOLD=0.01",
        description: "",

    },
    bj_WAIT_FOR_COND_MIN_INTERVAL: {
        completion: "constant real bj_WAIT_FOR_COND_MIN_INTERVAL=0.10",
        description: "",

    },
    bj_POLLED_WAIT_INTERVAL: {
        completion: "constant real bj_POLLED_WAIT_INTERVAL=0.10",
        description: "",

    },
    bj_POLLED_WAIT_SKIP_THRESHOLD: {
        completion: "constant real bj_POLLED_WAIT_SKIP_THRESHOLD=2.00",
        description: "",

    },
    bj_MAX_INVENTORY: {
        completion: "constant integer bj_MAX_INVENTORY=6",
        description: "",

    },
    bj_MAX_PLAYERS: {
        completion: "constant integer bj_MAX_PLAYERS=12",
        description: "",

    },
    bj_PLAYER_NEUTRAL_VICTIM: {
        completion: "constant integer bj_PLAYER_NEUTRAL_VICTIM=13",
        description: "",

    },
    bj_PLAYER_NEUTRAL_EXTRA: {
        completion: "constant integer bj_PLAYER_NEUTRAL_EXTRA=14",
        description: "",

    },
    bj_MAX_PLAYER_SLOTS: {
        completion: "constant integer bj_MAX_PLAYER_SLOTS=16",
        description: "",

    },
    bj_MAX_SKELETONS: {
        completion: "constant integer bj_MAX_SKELETONS=25",
        description: "",

    },
    bj_MAX_STOCK_ITEM_SLOTS: {
        completion: "constant integer bj_MAX_STOCK_ITEM_SLOTS=11",
        description: "",

    },
    bj_MAX_STOCK_UNIT_SLOTS: {
        completion: "constant integer bj_MAX_STOCK_UNIT_SLOTS=11",
        description: "",

    },
    bj_MAX_ITEM_LEVEL: {
        completion: "constant integer bj_MAX_ITEM_LEVEL=10",
        description: "",

    },
    bj_TOD_DAWN: {
        completion: "constant real bj_TOD_DAWN=6.00",
        description: "",

    },
    bj_TOD_DUSK: {
        completion: "constant real bj_TOD_DUSK=18.00",
        description: "",

    },
    bj_MELEE_STARTING_TOD: {
        completion: "constant real bj_MELEE_STARTING_TOD=8.00",
        description: "",

    },
    bj_MELEE_STARTING_GOLD_V0: {
        completion: "constant integer bj_MELEE_STARTING_GOLD_V0=750",
        description: "",

    },
    bj_MELEE_STARTING_GOLD_V1: {
        completion: "constant integer bj_MELEE_STARTING_GOLD_V1=500",
        description: "",

    },
    bj_MELEE_STARTING_LUMBER_V0: {
        completion: "constant integer bj_MELEE_STARTING_LUMBER_V0=200",
        description: "",

    },
    bj_MELEE_STARTING_LUMBER_V1: {
        completion: "constant integer bj_MELEE_STARTING_LUMBER_V1=150",
        description: "",

    },
    bj_MELEE_STARTING_HERO_TOKENS: {
        completion: "constant integer bj_MELEE_STARTING_HERO_TOKENS=1",
        description: "",

    },
    bj_MELEE_HERO_LIMIT: {
        completion: "constant integer bj_MELEE_HERO_LIMIT=3",
        description: "",

    },
    bj_MELEE_HERO_TYPE_LIMIT: {
        completion: "constant integer bj_MELEE_HERO_TYPE_LIMIT=1",
        description: "",

    },
    bj_MELEE_MINE_SEARCH_RADIUS: {
        completion: "constant real bj_MELEE_MINE_SEARCH_RADIUS=2000",
        description: "",

    },
    bj_MELEE_CLEAR_UNITS_RADIUS: {
        completion: "constant real bj_MELEE_CLEAR_UNITS_RADIUS=1500",
        description: "",

    },
    bj_MELEE_CRIPPLE_TIMEOUT: {
        completion: "constant real bj_MELEE_CRIPPLE_TIMEOUT=120.00",
        description: "",

    },
    bj_MELEE_CRIPPLE_MSG_DURATION: {
        completion: "constant real bj_MELEE_CRIPPLE_MSG_DURATION=20.00",
        description: "",

    },
    bj_MELEE_MAX_TWINKED_HEROES_V0: {
        completion: "constant integer bj_MELEE_MAX_TWINKED_HEROES_V0=3",
        description: "",

    },
    bj_MELEE_MAX_TWINKED_HEROES_V1: {
        completion: "constant integer bj_MELEE_MAX_TWINKED_HEROES_V1=1",
        description: "",

    },
    bj_CREEP_ITEM_DELAY: {
        completion: "constant real bj_CREEP_ITEM_DELAY=0.50",
        description: "",

    },
    bj_STOCK_RESTOCK_INITIAL_DELAY: {
        completion: "constant real bj_STOCK_RESTOCK_INITIAL_DELAY=120",
        description: "",

    },
    bj_STOCK_RESTOCK_INTERVAL: {
        completion: "constant real bj_STOCK_RESTOCK_INTERVAL=30",
        description: "",

    },
    bj_STOCK_MAX_ITERATIONS: {
        completion: "constant integer bj_STOCK_MAX_ITERATIONS=20",
        description: "",

    },
    bj_MAX_DEST_IN_REGION_EVENTS: {
        completion: "constant integer bj_MAX_DEST_IN_REGION_EVENTS=64",
        description: "",

    },
    bj_CAMERA_MIN_FARZ: {
        completion: "constant integer bj_CAMERA_MIN_FARZ=100",
        description: "",

    },
    bj_CAMERA_DEFAULT_DISTANCE: {
        completion: "constant integer bj_CAMERA_DEFAULT_DISTANCE=1650",
        description: "",

    },
    bj_CAMERA_DEFAULT_FARZ: {
        completion: "constant integer bj_CAMERA_DEFAULT_FARZ=5000",
        description: "",

    },
    bj_CAMERA_DEFAULT_AOA: {
        completion: "constant integer bj_CAMERA_DEFAULT_AOA=304",
        description: "",

    },
    bj_CAMERA_DEFAULT_FOV: {
        completion: "constant integer bj_CAMERA_DEFAULT_FOV=70",
        description: "",

    },
    bj_CAMERA_DEFAULT_ROLL: {
        completion: "constant integer bj_CAMERA_DEFAULT_ROLL=0",
        description: "",

    },
    bj_CAMERA_DEFAULT_ROTATION: {
        completion: "constant integer bj_CAMERA_DEFAULT_ROTATION=90",
        description: "",

    },
    bj_RESCUE_PING_TIME: {
        completion: "constant real bj_RESCUE_PING_TIME=2.00",
        description: "",

    },
    bj_NOTHING_SOUND_DURATION: {
        completion: "constant real bj_NOTHING_SOUND_DURATION=5.00",
        description: "",

    },
    bj_TRANSMISSION_PING_TIME: {
        completion: "constant real bj_TRANSMISSION_PING_TIME=1.00",
        description: "",

    },
    bj_TRANSMISSION_IND_RED: {
        completion: "constant integer bj_TRANSMISSION_IND_RED=255",
        description: "",

    },
    bj_TRANSMISSION_IND_BLUE: {
        completion: "constant integer bj_TRANSMISSION_IND_BLUE=255",
        description: "",

    },
    bj_TRANSMISSION_IND_GREEN: {
        completion: "constant integer bj_TRANSMISSION_IND_GREEN=255",
        description: "",

    },
    bj_TRANSMISSION_IND_ALPHA: {
        completion: "constant integer bj_TRANSMISSION_IND_ALPHA=255",
        description: "",

    },
    bj_TRANSMISSION_PORT_HANGTIME: {
        completion: "constant real bj_TRANSMISSION_PORT_HANGTIME=1.50",
        description: "",

    },
    bj_CINEMODE_INTERFACEFADE: {
        completion: "constant real bj_CINEMODE_INTERFACEFADE=0.50",
        description: "",

    },
    bj_CINEMODE_GAMESPEED: {
        completion: "constant gamespeed bj_CINEMODE_GAMESPEED=MAP_SPEED_NORMAL",
        description: "",

    },
    bj_CINEMODE_VOLUME_UNITMOVEMENT: {
        completion: "constant real bj_CINEMODE_VOLUME_UNITMOVEMENT=0.40",
        description: "",

    },
    bj_CINEMODE_VOLUME_UNITSOUNDS: {
        completion: "constant real bj_CINEMODE_VOLUME_UNITSOUNDS=0.00",
        description: "",

    },
    bj_CINEMODE_VOLUME_COMBAT: {
        completion: "constant real bj_CINEMODE_VOLUME_COMBAT=0.40",
        description: "",

    },
    bj_CINEMODE_VOLUME_SPELLS: {
        completion: "constant real bj_CINEMODE_VOLUME_SPELLS=0.40",
        description: "",

    },
    bj_CINEMODE_VOLUME_UI: {
        completion: "constant real bj_CINEMODE_VOLUME_UI=0.00",
        description: "",

    },
    bj_CINEMODE_VOLUME_MUSIC: {
        completion: "constant real bj_CINEMODE_VOLUME_MUSIC=0.55",
        description: "",

    },
    bj_CINEMODE_VOLUME_AMBIENTSOUNDS: {
        completion: "constant real bj_CINEMODE_VOLUME_AMBIENTSOUNDS=1.00",
        description: "",

    },
    bj_CINEMODE_VOLUME_FIRE: {
        completion: "constant real bj_CINEMODE_VOLUME_FIRE=0.60",
        description: "",

    },
    bj_SPEECH_VOLUME_UNITMOVEMENT: {
        completion: "constant real bj_SPEECH_VOLUME_UNITMOVEMENT=0.25",
        description: "",

    },
    bj_SPEECH_VOLUME_UNITSOUNDS: {
        completion: "constant real bj_SPEECH_VOLUME_UNITSOUNDS=0.00",
        description: "",

    },
    bj_SPEECH_VOLUME_COMBAT: {
        completion: "constant real bj_SPEECH_VOLUME_COMBAT=0.25",
        description: "",

    },
    bj_SPEECH_VOLUME_SPELLS: {
        completion: "constant real bj_SPEECH_VOLUME_SPELLS=0.25",
        description: "",

    },
    bj_SPEECH_VOLUME_UI: {
        completion: "constant real bj_SPEECH_VOLUME_UI=0.00",
        description: "",

    },
    bj_SPEECH_VOLUME_MUSIC: {
        completion: "constant real bj_SPEECH_VOLUME_MUSIC=0.55",
        description: "",

    },
    bj_SPEECH_VOLUME_AMBIENTSOUNDS: {
        completion: "constant real bj_SPEECH_VOLUME_AMBIENTSOUNDS=1.00",
        description: "",

    },
    bj_SPEECH_VOLUME_FIRE: {
        completion: "constant real bj_SPEECH_VOLUME_FIRE=0.60",
        description: "",

    },
    bj_SMARTPAN_TRESHOLD_PAN: {
        completion: "constant real bj_SMARTPAN_TRESHOLD_PAN=500",
        description: "",

    },
    bj_SMARTPAN_TRESHOLD_SNAP: {
        completion: "constant real bj_SMARTPAN_TRESHOLD_SNAP=3500",
        description: "",

    },
    bj_MAX_QUEUED_TRIGGERS: {
        completion: "constant integer bj_MAX_QUEUED_TRIGGERS=100",
        description: "",

    },
    bj_QUEUED_TRIGGER_TIMEOUT: {
        completion: "constant real bj_QUEUED_TRIGGER_TIMEOUT=180.00",
        description: "",

    },
    bj_CAMPAIGN_INDEX_T: {
        completion: "constant integer bj_CAMPAIGN_INDEX_T=0",
        description: "",

    },
    bj_CAMPAIGN_INDEX_H: {
        completion: "constant integer bj_CAMPAIGN_INDEX_H=1",
        description: "",

    },
    bj_CAMPAIGN_INDEX_U: {
        completion: "constant integer bj_CAMPAIGN_INDEX_U=2",
        description: "",

    },
    bj_CAMPAIGN_INDEX_O: {
        completion: "constant integer bj_CAMPAIGN_INDEX_O=3",
        description: "",

    },
    bj_CAMPAIGN_INDEX_N: {
        completion: "constant integer bj_CAMPAIGN_INDEX_N=4",
        description: "",

    },
    bj_CAMPAIGN_INDEX_XN: {
        completion: "constant integer bj_CAMPAIGN_INDEX_XN=5",
        description: "",

    },
    bj_CAMPAIGN_INDEX_XH: {
        completion: "constant integer bj_CAMPAIGN_INDEX_XH=6",
        description: "",

    },
    bj_CAMPAIGN_INDEX_XU: {
        completion: "constant integer bj_CAMPAIGN_INDEX_XU=7",
        description: "",

    },
    bj_CAMPAIGN_INDEX_XO: {
        completion: "constant integer bj_CAMPAIGN_INDEX_XO=8",
        description: "",

    },
    bj_CAMPAIGN_OFFSET_T: {
        completion: "constant integer bj_CAMPAIGN_OFFSET_T=0",
        description: "",

    },
    bj_CAMPAIGN_OFFSET_H: {
        completion: "constant integer bj_CAMPAIGN_OFFSET_H=1",
        description: "",

    },
    bj_CAMPAIGN_OFFSET_U: {
        completion: "constant integer bj_CAMPAIGN_OFFSET_U=2",
        description: "",

    },
    bj_CAMPAIGN_OFFSET_O: {
        completion: "constant integer bj_CAMPAIGN_OFFSET_O=3",
        description: "",

    },
    bj_CAMPAIGN_OFFSET_N: {
        completion: "constant integer bj_CAMPAIGN_OFFSET_N=4",
        description: "",

    },
    bj_CAMPAIGN_OFFSET_XN: {
        completion: "constant integer bj_CAMPAIGN_OFFSET_XN=0",
        description: "",

    },
    bj_CAMPAIGN_OFFSET_XH: {
        completion: "constant integer bj_CAMPAIGN_OFFSET_XH=1",
        description: "",

    },
    bj_CAMPAIGN_OFFSET_XU: {
        completion: "constant integer bj_CAMPAIGN_OFFSET_XU=2",
        description: "",

    },
    bj_CAMPAIGN_OFFSET_XO: {
        completion: "constant integer bj_CAMPAIGN_OFFSET_XO=3",
        description: "",

    },
    bj_MISSION_INDEX_T00: {
        completion: "constant integer bj_MISSION_INDEX_T00=bj_CAMPAIGN_OFFSET_T*1000+0",
        description: "",

    },
    bj_MISSION_INDEX_T01: {
        completion: "constant integer bj_MISSION_INDEX_T01=bj_CAMPAIGN_OFFSET_T*1000+1",
        description: "",

    },
    bj_MISSION_INDEX_H00: {
        completion: "constant integer bj_MISSION_INDEX_H00=bj_CAMPAIGN_OFFSET_H*1000+0",
        description: "",

    },
    bj_MISSION_INDEX_H01: {
        completion: "constant integer bj_MISSION_INDEX_H01=bj_CAMPAIGN_OFFSET_H*1000+1",
        description: "",

    },
    bj_MISSION_INDEX_H02: {
        completion: "constant integer bj_MISSION_INDEX_H02=bj_CAMPAIGN_OFFSET_H*1000+2",
        description: "",

    },
    bj_MISSION_INDEX_H03: {
        completion: "constant integer bj_MISSION_INDEX_H03=bj_CAMPAIGN_OFFSET_H*1000+3",
        description: "",

    },
    bj_MISSION_INDEX_H04: {
        completion: "constant integer bj_MISSION_INDEX_H04=bj_CAMPAIGN_OFFSET_H*1000+4",
        description: "",

    },
    bj_MISSION_INDEX_H05: {
        completion: "constant integer bj_MISSION_INDEX_H05=bj_CAMPAIGN_OFFSET_H*1000+5",
        description: "",

    },
    bj_MISSION_INDEX_H06: {
        completion: "constant integer bj_MISSION_INDEX_H06=bj_CAMPAIGN_OFFSET_H*1000+6",
        description: "",

    },
    bj_MISSION_INDEX_H07: {
        completion: "constant integer bj_MISSION_INDEX_H07=bj_CAMPAIGN_OFFSET_H*1000+7",
        description: "",

    },
    bj_MISSION_INDEX_H08: {
        completion: "constant integer bj_MISSION_INDEX_H08=bj_CAMPAIGN_OFFSET_H*1000+8",
        description: "",

    },
    bj_MISSION_INDEX_H09: {
        completion: "constant integer bj_MISSION_INDEX_H09=bj_CAMPAIGN_OFFSET_H*1000+9",
        description: "",

    },
    bj_MISSION_INDEX_H10: {
        completion: "constant integer bj_MISSION_INDEX_H10=bj_CAMPAIGN_OFFSET_H*1000+10",
        description: "",

    },
    bj_MISSION_INDEX_H11: {
        completion: "constant integer bj_MISSION_INDEX_H11=bj_CAMPAIGN_OFFSET_H*1000+11",
        description: "",

    },
    bj_MISSION_INDEX_U00: {
        completion: "constant integer bj_MISSION_INDEX_U00=bj_CAMPAIGN_OFFSET_U*1000+0",
        description: "",

    },
    bj_MISSION_INDEX_U01: {
        completion: "constant integer bj_MISSION_INDEX_U01=bj_CAMPAIGN_OFFSET_U*1000+1",
        description: "",

    },
    bj_MISSION_INDEX_U02: {
        completion: "constant integer bj_MISSION_INDEX_U02=bj_CAMPAIGN_OFFSET_U*1000+2",
        description: "",

    },
    bj_MISSION_INDEX_U03: {
        completion: "constant integer bj_MISSION_INDEX_U03=bj_CAMPAIGN_OFFSET_U*1000+3",
        description: "",

    },
    bj_MISSION_INDEX_U05: {
        completion: "constant integer bj_MISSION_INDEX_U05=bj_CAMPAIGN_OFFSET_U*1000+4",
        description: "",

    },
    bj_MISSION_INDEX_U07: {
        completion: "constant integer bj_MISSION_INDEX_U07=bj_CAMPAIGN_OFFSET_U*1000+5",
        description: "",

    },
    bj_MISSION_INDEX_U08: {
        completion: "constant integer bj_MISSION_INDEX_U08=bj_CAMPAIGN_OFFSET_U*1000+6",
        description: "",

    },
    bj_MISSION_INDEX_U09: {
        completion: "constant integer bj_MISSION_INDEX_U09=bj_CAMPAIGN_OFFSET_U*1000+7",
        description: "",

    },
    bj_MISSION_INDEX_U10: {
        completion: "constant integer bj_MISSION_INDEX_U10=bj_CAMPAIGN_OFFSET_U*1000+8",
        description: "",

    },
    bj_MISSION_INDEX_U11: {
        completion: "constant integer bj_MISSION_INDEX_U11=bj_CAMPAIGN_OFFSET_U*1000+9",
        description: "",

    },
    bj_MISSION_INDEX_O00: {
        completion: "constant integer bj_MISSION_INDEX_O00=bj_CAMPAIGN_OFFSET_O*1000+0",
        description: "",

    },
    bj_MISSION_INDEX_O01: {
        completion: "constant integer bj_MISSION_INDEX_O01=bj_CAMPAIGN_OFFSET_O*1000+1",
        description: "",

    },
    bj_MISSION_INDEX_O02: {
        completion: "constant integer bj_MISSION_INDEX_O02=bj_CAMPAIGN_OFFSET_O*1000+2",
        description: "",

    },
    bj_MISSION_INDEX_O03: {
        completion: "constant integer bj_MISSION_INDEX_O03=bj_CAMPAIGN_OFFSET_O*1000+3",
        description: "",

    },
    bj_MISSION_INDEX_O04: {
        completion: "constant integer bj_MISSION_INDEX_O04=bj_CAMPAIGN_OFFSET_O*1000+4",
        description: "",

    },
    bj_MISSION_INDEX_O05: {
        completion: "constant integer bj_MISSION_INDEX_O05=bj_CAMPAIGN_OFFSET_O*1000+5",
        description: "",

    },
    bj_MISSION_INDEX_O06: {
        completion: "constant integer bj_MISSION_INDEX_O06=bj_CAMPAIGN_OFFSET_O*1000+6",
        description: "",

    },
    bj_MISSION_INDEX_O07: {
        completion: "constant integer bj_MISSION_INDEX_O07=bj_CAMPAIGN_OFFSET_O*1000+7",
        description: "",

    },
    bj_MISSION_INDEX_O08: {
        completion: "constant integer bj_MISSION_INDEX_O08=bj_CAMPAIGN_OFFSET_O*1000+8",
        description: "",

    },
    bj_MISSION_INDEX_O09: {
        completion: "constant integer bj_MISSION_INDEX_O09=bj_CAMPAIGN_OFFSET_O*1000+9",
        description: "",

    },
    bj_MISSION_INDEX_O10: {
        completion: "constant integer bj_MISSION_INDEX_O10=bj_CAMPAIGN_OFFSET_O*1000+10",
        description: "",

    },
    bj_MISSION_INDEX_N00: {
        completion: "constant integer bj_MISSION_INDEX_N00=bj_CAMPAIGN_OFFSET_N*1000+0",
        description: "",

    },
    bj_MISSION_INDEX_N01: {
        completion: "constant integer bj_MISSION_INDEX_N01=bj_CAMPAIGN_OFFSET_N*1000+1",
        description: "",

    },
    bj_MISSION_INDEX_N02: {
        completion: "constant integer bj_MISSION_INDEX_N02=bj_CAMPAIGN_OFFSET_N*1000+2",
        description: "",

    },
    bj_MISSION_INDEX_N03: {
        completion: "constant integer bj_MISSION_INDEX_N03=bj_CAMPAIGN_OFFSET_N*1000+3",
        description: "",

    },
    bj_MISSION_INDEX_N04: {
        completion: "constant integer bj_MISSION_INDEX_N04=bj_CAMPAIGN_OFFSET_N*1000+4",
        description: "",

    },
    bj_MISSION_INDEX_N05: {
        completion: "constant integer bj_MISSION_INDEX_N05=bj_CAMPAIGN_OFFSET_N*1000+5",
        description: "",

    },
    bj_MISSION_INDEX_N06: {
        completion: "constant integer bj_MISSION_INDEX_N06=bj_CAMPAIGN_OFFSET_N*1000+6",
        description: "",

    },
    bj_MISSION_INDEX_N07: {
        completion: "constant integer bj_MISSION_INDEX_N07=bj_CAMPAIGN_OFFSET_N*1000+7",
        description: "",

    },
    bj_MISSION_INDEX_N08: {
        completion: "constant integer bj_MISSION_INDEX_N08=bj_CAMPAIGN_OFFSET_N*1000+8",
        description: "",

    },
    bj_MISSION_INDEX_N09: {
        completion: "constant integer bj_MISSION_INDEX_N09=bj_CAMPAIGN_OFFSET_N*1000+9",
        description: "",

    },
    bj_MISSION_INDEX_XN00: {
        completion: "constant integer bj_MISSION_INDEX_XN00=bj_CAMPAIGN_OFFSET_XN*1000+0",
        description: "",

    },
    bj_MISSION_INDEX_XN01: {
        completion: "constant integer bj_MISSION_INDEX_XN01=bj_CAMPAIGN_OFFSET_XN*1000+1",
        description: "",

    },
    bj_MISSION_INDEX_XN02: {
        completion: "constant integer bj_MISSION_INDEX_XN02=bj_CAMPAIGN_OFFSET_XN*1000+2",
        description: "",

    },
    bj_MISSION_INDEX_XN03: {
        completion: "constant integer bj_MISSION_INDEX_XN03=bj_CAMPAIGN_OFFSET_XN*1000+3",
        description: "",

    },
    bj_MISSION_INDEX_XN04: {
        completion: "constant integer bj_MISSION_INDEX_XN04=bj_CAMPAIGN_OFFSET_XN*1000+4",
        description: "",

    },
    bj_MISSION_INDEX_XN05: {
        completion: "constant integer bj_MISSION_INDEX_XN05=bj_CAMPAIGN_OFFSET_XN*1000+5",
        description: "",

    },
    bj_MISSION_INDEX_XN06: {
        completion: "constant integer bj_MISSION_INDEX_XN06=bj_CAMPAIGN_OFFSET_XN*1000+6",
        description: "",

    },
    bj_MISSION_INDEX_XN07: {
        completion: "constant integer bj_MISSION_INDEX_XN07=bj_CAMPAIGN_OFFSET_XN*1000+7",
        description: "",

    },
    bj_MISSION_INDEX_XN08: {
        completion: "constant integer bj_MISSION_INDEX_XN08=bj_CAMPAIGN_OFFSET_XN*1000+8",
        description: "",

    },
    bj_MISSION_INDEX_XN09: {
        completion: "constant integer bj_MISSION_INDEX_XN09=bj_CAMPAIGN_OFFSET_XN*1000+9",
        description: "",

    },
    bj_MISSION_INDEX_XN10: {
        completion: "constant integer bj_MISSION_INDEX_XN10=bj_CAMPAIGN_OFFSET_XN*1000+10",
        description: "",

    },
    bj_MISSION_INDEX_XH00: {
        completion: "constant integer bj_MISSION_INDEX_XH00=bj_CAMPAIGN_OFFSET_XH*1000+0",
        description: "",

    },
    bj_MISSION_INDEX_XH01: {
        completion: "constant integer bj_MISSION_INDEX_XH01=bj_CAMPAIGN_OFFSET_XH*1000+1",
        description: "",

    },
    bj_MISSION_INDEX_XH02: {
        completion: "constant integer bj_MISSION_INDEX_XH02=bj_CAMPAIGN_OFFSET_XH*1000+2",
        description: "",

    },
    bj_MISSION_INDEX_XH03: {
        completion: "constant integer bj_MISSION_INDEX_XH03=bj_CAMPAIGN_OFFSET_XH*1000+3",
        description: "",

    },
    bj_MISSION_INDEX_XH04: {
        completion: "constant integer bj_MISSION_INDEX_XH04=bj_CAMPAIGN_OFFSET_XH*1000+4",
        description: "",

    },
    bj_MISSION_INDEX_XH05: {
        completion: "constant integer bj_MISSION_INDEX_XH05=bj_CAMPAIGN_OFFSET_XH*1000+5",
        description: "",

    },
    bj_MISSION_INDEX_XH06: {
        completion: "constant integer bj_MISSION_INDEX_XH06=bj_CAMPAIGN_OFFSET_XH*1000+6",
        description: "",

    },
    bj_MISSION_INDEX_XH07: {
        completion: "constant integer bj_MISSION_INDEX_XH07=bj_CAMPAIGN_OFFSET_XH*1000+7",
        description: "",

    },
    bj_MISSION_INDEX_XH08: {
        completion: "constant integer bj_MISSION_INDEX_XH08=bj_CAMPAIGN_OFFSET_XH*1000+8",
        description: "",

    },
    bj_MISSION_INDEX_XH09: {
        completion: "constant integer bj_MISSION_INDEX_XH09=bj_CAMPAIGN_OFFSET_XH*1000+9",
        description: "",

    },
    bj_MISSION_INDEX_XU00: {
        completion: "constant integer bj_MISSION_INDEX_XU00=bj_CAMPAIGN_OFFSET_XU*1000+0",
        description: "",

    },
    bj_MISSION_INDEX_XU01: {
        completion: "constant integer bj_MISSION_INDEX_XU01=bj_CAMPAIGN_OFFSET_XU*1000+1",
        description: "",

    },
    bj_MISSION_INDEX_XU02: {
        completion: "constant integer bj_MISSION_INDEX_XU02=bj_CAMPAIGN_OFFSET_XU*1000+2",
        description: "",

    },
    bj_MISSION_INDEX_XU03: {
        completion: "constant integer bj_MISSION_INDEX_XU03=bj_CAMPAIGN_OFFSET_XU*1000+3",
        description: "",

    },
    bj_MISSION_INDEX_XU04: {
        completion: "constant integer bj_MISSION_INDEX_XU04=bj_CAMPAIGN_OFFSET_XU*1000+4",
        description: "",

    },
    bj_MISSION_INDEX_XU05: {
        completion: "constant integer bj_MISSION_INDEX_XU05=bj_CAMPAIGN_OFFSET_XU*1000+5",
        description: "",

    },
    bj_MISSION_INDEX_XU06: {
        completion: "constant integer bj_MISSION_INDEX_XU06=bj_CAMPAIGN_OFFSET_XU*1000+6",
        description: "",

    },
    bj_MISSION_INDEX_XU07: {
        completion: "constant integer bj_MISSION_INDEX_XU07=bj_CAMPAIGN_OFFSET_XU*1000+7",
        description: "",

    },
    bj_MISSION_INDEX_XU08: {
        completion: "constant integer bj_MISSION_INDEX_XU08=bj_CAMPAIGN_OFFSET_XU*1000+8",
        description: "",

    },
    bj_MISSION_INDEX_XU09: {
        completion: "constant integer bj_MISSION_INDEX_XU09=bj_CAMPAIGN_OFFSET_XU*1000+9",
        description: "",

    },
    bj_MISSION_INDEX_XU10: {
        completion: "constant integer bj_MISSION_INDEX_XU10=bj_CAMPAIGN_OFFSET_XU*1000+10",
        description: "",

    },
    bj_MISSION_INDEX_XU11: {
        completion: "constant integer bj_MISSION_INDEX_XU11=bj_CAMPAIGN_OFFSET_XU*1000+11",
        description: "",

    },
    bj_MISSION_INDEX_XU12: {
        completion: "constant integer bj_MISSION_INDEX_XU12=bj_CAMPAIGN_OFFSET_XU*1000+12",
        description: "",

    },
    bj_MISSION_INDEX_XU13: {
        completion: "constant integer bj_MISSION_INDEX_XU13=bj_CAMPAIGN_OFFSET_XU*1000+13",
        description: "",

    },
    bj_MISSION_INDEX_XO00: {
        completion: "constant integer bj_MISSION_INDEX_XO00=bj_CAMPAIGN_OFFSET_XO*1000+0",
        description: "",

    },
    bj_CINEMATICINDEX_TOP: {
        completion: "constant integer bj_CINEMATICINDEX_TOP=0",
        description: "",

    },
    bj_CINEMATICINDEX_HOP: {
        completion: "constant integer bj_CINEMATICINDEX_HOP=1",
        description: "",

    },
    bj_CINEMATICINDEX_HED: {
        completion: "constant integer bj_CINEMATICINDEX_HED=2",
        description: "",

    },
    bj_CINEMATICINDEX_OOP: {
        completion: "constant integer bj_CINEMATICINDEX_OOP=3",
        description: "",

    },
    bj_CINEMATICINDEX_OED: {
        completion: "constant integer bj_CINEMATICINDEX_OED=4",
        description: "",

    },
    bj_CINEMATICINDEX_UOP: {
        completion: "constant integer bj_CINEMATICINDEX_UOP=5",
        description: "",

    },
    bj_CINEMATICINDEX_UED: {
        completion: "constant integer bj_CINEMATICINDEX_UED=6",
        description: "",

    },
    bj_CINEMATICINDEX_NOP: {
        completion: "constant integer bj_CINEMATICINDEX_NOP=7",
        description: "",

    },
    bj_CINEMATICINDEX_NED: {
        completion: "constant integer bj_CINEMATICINDEX_NED=8",
        description: "",

    },
    bj_CINEMATICINDEX_XOP: {
        completion: "constant integer bj_CINEMATICINDEX_XOP=9",
        description: "",

    },
    bj_CINEMATICINDEX_XED: {
        completion: "constant integer bj_CINEMATICINDEX_XED=10",
        description: "",

    },
    bj_ALLIANCE_UNALLIED: {
        completion: "constant integer bj_ALLIANCE_UNALLIED=0",
        description: "",

    },
    bj_ALLIANCE_UNALLIED_VISION: {
        completion: "constant integer bj_ALLIANCE_UNALLIED_VISION=1",
        description: "",

    },
    bj_ALLIANCE_ALLIED: {
        completion: "constant integer bj_ALLIANCE_ALLIED=2",
        description: "",

    },
    bj_ALLIANCE_ALLIED_VISION: {
        completion: "constant integer bj_ALLIANCE_ALLIED_VISION=3",
        description: "",

    },
    bj_ALLIANCE_ALLIED_UNITS: {
        completion: "constant integer bj_ALLIANCE_ALLIED_UNITS=4",
        description: "",

    },
    bj_ALLIANCE_ALLIED_ADVUNITS: {
        completion: "constant integer bj_ALLIANCE_ALLIED_ADVUNITS=5",
        description: "",

    },
    bj_ALLIANCE_NEUTRAL: {
        completion: "constant integer bj_ALLIANCE_NEUTRAL=6",
        description: "",

    },
    bj_ALLIANCE_NEUTRAL_VISION: {
        completion: "constant integer bj_ALLIANCE_NEUTRAL_VISION=7",
        description: "",

    },
    bj_KEYEVENTTYPE_DEPRESS: {
        completion: "constant integer bj_KEYEVENTTYPE_DEPRESS=0",
        description: "",

    },
    bj_KEYEVENTTYPE_RELEASE: {
        completion: "constant integer bj_KEYEVENTTYPE_RELEASE=1",
        description: "",

    },
    bj_KEYEVENTKEY_LEFT: {
        completion: "constant integer bj_KEYEVENTKEY_LEFT=0",
        description: "",

    },
    bj_KEYEVENTKEY_RIGHT: {
        completion: "constant integer bj_KEYEVENTKEY_RIGHT=1",
        description: "",

    },
    bj_KEYEVENTKEY_DOWN: {
        completion: "constant integer bj_KEYEVENTKEY_DOWN=2",
        description: "",

    },
    bj_KEYEVENTKEY_UP: {
        completion: "constant integer bj_KEYEVENTKEY_UP=3",
        description: "",

    },
    bj_TIMETYPE_ADD: {
        completion: "constant integer bj_TIMETYPE_ADD=0",
        description: "",

    },
    bj_TIMETYPE_SET: {
        completion: "constant integer bj_TIMETYPE_SET=1",
        description: "",

    },
    bj_TIMETYPE_SUB: {
        completion: "constant integer bj_TIMETYPE_SUB=2",
        description: "",

    },
    bj_CAMERABOUNDS_ADJUST_ADD: {
        completion: "constant integer bj_CAMERABOUNDS_ADJUST_ADD=0",
        description: "",

    },
    bj_CAMERABOUNDS_ADJUST_SUB: {
        completion: "constant integer bj_CAMERABOUNDS_ADJUST_SUB=1",
        description: "",

    },
    bj_QUESTTYPE_REQ_DISCOVERED: {
        completion: "constant integer bj_QUESTTYPE_REQ_DISCOVERED=0",
        description: "",

    },
    bj_QUESTTYPE_REQ_UNDISCOVERED: {
        completion: "constant integer bj_QUESTTYPE_REQ_UNDISCOVERED=1",
        description: "",

    },
    bj_QUESTTYPE_OPT_DISCOVERED: {
        completion: "constant integer bj_QUESTTYPE_OPT_DISCOVERED=2",
        description: "",

    },
    bj_QUESTTYPE_OPT_UNDISCOVERED: {
        completion: "constant integer bj_QUESTTYPE_OPT_UNDISCOVERED=3",
        description: "",

    },
    bj_QUESTMESSAGE_DISCOVERED: {
        completion: "constant integer bj_QUESTMESSAGE_DISCOVERED=0",
        description: "",

    },
    bj_QUESTMESSAGE_UPDATED: {
        completion: "constant integer bj_QUESTMESSAGE_UPDATED=1",
        description: "",

    },
    bj_QUESTMESSAGE_COMPLETED: {
        completion: "constant integer bj_QUESTMESSAGE_COMPLETED=2",
        description: "",

    },
    bj_QUESTMESSAGE_FAILED: {
        completion: "constant integer bj_QUESTMESSAGE_FAILED=3",
        description: "",

    },
    bj_QUESTMESSAGE_REQUIREMENT: {
        completion: "constant integer bj_QUESTMESSAGE_REQUIREMENT=4",
        description: "",

    },
    bj_QUESTMESSAGE_MISSIONFAILED: {
        completion: "constant integer bj_QUESTMESSAGE_MISSIONFAILED=5",
        description: "",

    },
    bj_QUESTMESSAGE_ALWAYSHINT: {
        completion: "constant integer bj_QUESTMESSAGE_ALWAYSHINT=6",
        description: "",

    },
    bj_QUESTMESSAGE_HINT: {
        completion: "constant integer bj_QUESTMESSAGE_HINT=7",
        description: "",

    },
    bj_QUESTMESSAGE_SECRET: {
        completion: "constant integer bj_QUESTMESSAGE_SECRET=8",
        description: "",

    },
    bj_QUESTMESSAGE_UNITACQUIRED: {
        completion: "constant integer bj_QUESTMESSAGE_UNITACQUIRED=9",
        description: "",

    },
    bj_QUESTMESSAGE_UNITAVAILABLE: {
        completion: "constant integer bj_QUESTMESSAGE_UNITAVAILABLE=10",
        description: "",

    },
    bj_QUESTMESSAGE_ITEMACQUIRED: {
        completion: "constant integer bj_QUESTMESSAGE_ITEMACQUIRED=11",
        description: "",

    },
    bj_QUESTMESSAGE_WARNING: {
        completion: "constant integer bj_QUESTMESSAGE_WARNING=12",
        description: "",

    },
    bj_SORTTYPE_SORTBYVALUE: {
        completion: "constant integer bj_SORTTYPE_SORTBYVALUE=0",
        description: "",

    },
    bj_SORTTYPE_SORTBYPLAYER: {
        completion: "constant integer bj_SORTTYPE_SORTBYPLAYER=1",
        description: "",

    },
    bj_SORTTYPE_SORTBYLABEL: {
        completion: "constant integer bj_SORTTYPE_SORTBYLABEL=2",
        description: "",

    },
    bj_CINEFADETYPE_FADEIN: {
        completion: "constant integer bj_CINEFADETYPE_FADEIN=0",
        description: "",

    },
    bj_CINEFADETYPE_FADEOUT: {
        completion: "constant integer bj_CINEFADETYPE_FADEOUT=1",
        description: "",

    },
    bj_CINEFADETYPE_FADEOUTIN: {
        completion: "constant integer bj_CINEFADETYPE_FADEOUTIN=2",
        description: "",

    },
    bj_REMOVEBUFFS_POSITIVE: {
        completion: "constant integer bj_REMOVEBUFFS_POSITIVE=0",
        description: "",

    },
    bj_REMOVEBUFFS_NEGATIVE: {
        completion: "constant integer bj_REMOVEBUFFS_NEGATIVE=1",
        description: "",

    },
    bj_REMOVEBUFFS_ALL: {
        completion: "constant integer bj_REMOVEBUFFS_ALL=2",
        description: "",

    },
    bj_REMOVEBUFFS_NONTLIFE: {
        completion: "constant integer bj_REMOVEBUFFS_NONTLIFE=3",
        description: "",

    },
    bj_BUFF_POLARITY_POSITIVE: {
        completion: "constant integer bj_BUFF_POLARITY_POSITIVE=0",
        description: "",

    },
    bj_BUFF_POLARITY_NEGATIVE: {
        completion: "constant integer bj_BUFF_POLARITY_NEGATIVE=1",
        description: "",

    },
    bj_BUFF_POLARITY_EITHER: {
        completion: "constant integer bj_BUFF_POLARITY_EITHER=2",
        description: "",

    },
    bj_BUFF_RESIST_MAGIC: {
        completion: "constant integer bj_BUFF_RESIST_MAGIC=0",
        description: "",

    },
    bj_BUFF_RESIST_PHYSICAL: {
        completion: "constant integer bj_BUFF_RESIST_PHYSICAL=1",
        description: "",

    },
    bj_BUFF_RESIST_EITHER: {
        completion: "constant integer bj_BUFF_RESIST_EITHER=2",
        description: "",

    },
    bj_BUFF_RESIST_BOTH: {
        completion: "constant integer bj_BUFF_RESIST_BOTH=3",
        description: "",

    },
    bj_HEROSTAT_STR: {
        completion: "constant integer bj_HEROSTAT_STR=0",
        description: "",

    },
    bj_HEROSTAT_AGI: {
        completion: "constant integer bj_HEROSTAT_AGI=1",
        description: "",

    },
    bj_HEROSTAT_INT: {
        completion: "constant integer bj_HEROSTAT_INT=2",
        description: "",

    },
    bj_MODIFYMETHOD_ADD: {
        completion: "constant integer bj_MODIFYMETHOD_ADD=0",
        description: "",

    },
    bj_MODIFYMETHOD_SUB: {
        completion: "constant integer bj_MODIFYMETHOD_SUB=1",
        description: "",

    },
    bj_MODIFYMETHOD_SET: {
        completion: "constant integer bj_MODIFYMETHOD_SET=2",
        description: "",

    },
    bj_UNIT_STATE_METHOD_ABSOLUTE: {
        completion: "constant integer bj_UNIT_STATE_METHOD_ABSOLUTE=0",
        description: "",

    },
    bj_UNIT_STATE_METHOD_RELATIVE: {
        completion: "constant integer bj_UNIT_STATE_METHOD_RELATIVE=1",
        description: "",

    },
    bj_UNIT_STATE_METHOD_DEFAULTS: {
        completion: "constant integer bj_UNIT_STATE_METHOD_DEFAULTS=2",
        description: "",

    },
    bj_UNIT_STATE_METHOD_MAXIMUM: {
        completion: "constant integer bj_UNIT_STATE_METHOD_MAXIMUM=3",
        description: "",

    },
    bj_GATEOPERATION_CLOSE: {
        completion: "constant integer bj_GATEOPERATION_CLOSE=0",
        description: "",

    },
    bj_GATEOPERATION_OPEN: {
        completion: "constant integer bj_GATEOPERATION_OPEN=1",
        description: "",

    },
    bj_GATEOPERATION_DESTROY: {
        completion: "constant integer bj_GATEOPERATION_DESTROY=2",
        description: "",

    },
    bj_GAMECACHE_BOOLEAN: {
        completion: "constant integer bj_GAMECACHE_BOOLEAN=0",
        description: "",

    },
    bj_GAMECACHE_INTEGER: {
        completion: "constant integer bj_GAMECACHE_INTEGER=1",
        description: "",

    },
    bj_GAMECACHE_REAL: {
        completion: "constant integer bj_GAMECACHE_REAL=2",
        description: "",

    },
    bj_GAMECACHE_UNIT: {
        completion: "constant integer bj_GAMECACHE_UNIT=3",
        description: "",

    },
    bj_GAMECACHE_STRING: {
        completion: "constant integer bj_GAMECACHE_STRING=4",
        description: "",

    },
    bj_ITEM_STATUS_HIDDEN: {
        completion: "constant integer bj_ITEM_STATUS_HIDDEN=0",
        description: "",

    },
    bj_ITEM_STATUS_OWNED: {
        completion: "constant integer bj_ITEM_STATUS_OWNED=1",
        description: "",

    },
    bj_ITEM_STATUS_INVULNERABLE: {
        completion: "constant integer bj_ITEM_STATUS_INVULNERABLE=2",
        description: "",

    },
    bj_ITEM_STATUS_POWERUP: {
        completion: "constant integer bj_ITEM_STATUS_POWERUP=3",
        description: "",

    },
    bj_ITEM_STATUS_SELLABLE: {
        completion: "constant integer bj_ITEM_STATUS_SELLABLE=4",
        description: "",

    },
    bj_ITEM_STATUS_PAWNABLE: {
        completion: "constant integer bj_ITEM_STATUS_PAWNABLE=5",
        description: "",

    },
    bj_ITEMCODE_STATUS_POWERUP: {
        completion: "constant integer bj_ITEMCODE_STATUS_POWERUP=0",
        description: "",

    },
    bj_ITEMCODE_STATUS_SELLABLE: {
        completion: "constant integer bj_ITEMCODE_STATUS_SELLABLE=1",
        description: "",

    },
    bj_ITEMCODE_STATUS_PAWNABLE: {
        completion: "constant integer bj_ITEMCODE_STATUS_PAWNABLE=2",
        description: "",

    },
    bj_MINIMAPPINGSTYLE_SIMPLE: {
        completion: "constant integer bj_MINIMAPPINGSTYLE_SIMPLE=0",
        description: "",

    },
    bj_MINIMAPPINGSTYLE_FLASHY: {
        completion: "constant integer bj_MINIMAPPINGSTYLE_FLASHY=1",
        description: "",

    },
    bj_MINIMAPPINGSTYLE_ATTACK: {
        completion: "constant integer bj_MINIMAPPINGSTYLE_ATTACK=2",
        description: "",

    },
    bj_CORPSE_MAX_DEATH_TIME: {
        completion: "constant real bj_CORPSE_MAX_DEATH_TIME=8.00",
        description: "",

    },
    bj_CORPSETYPE_FLESH: {
        completion: "constant integer bj_CORPSETYPE_FLESH=0",
        description: "",

    },
    bj_CORPSETYPE_BONE: {
        completion: "constant integer bj_CORPSETYPE_BONE=1",
        description: "",

    },
    bj_ELEVATOR_BLOCKER_CODE: {
        completion: "constant integer bj_ELEVATOR_BLOCKER_CODE='DTep'",
        description: "",

    },
    bj_ELEVATOR_CODE01: {
        completion: "constant integer bj_ELEVATOR_CODE01='DTrf'",
        description: "",

    },
    bj_ELEVATOR_CODE02: {
        completion: "constant integer bj_ELEVATOR_CODE02='DTrx'",
        description: "",

    },
    bj_ELEVATOR_WALL_TYPE_ALL: {
        completion: "constant integer bj_ELEVATOR_WALL_TYPE_ALL=0",
        description: "",

    },
    bj_ELEVATOR_WALL_TYPE_EAST: {
        completion: "constant integer bj_ELEVATOR_WALL_TYPE_EAST=1",
        description: "",

    },
    bj_ELEVATOR_WALL_TYPE_NORTH: {
        completion: "constant integer bj_ELEVATOR_WALL_TYPE_NORTH=2",
        description: "",

    },
    bj_ELEVATOR_WALL_TYPE_SOUTH: {
        completion: "constant integer bj_ELEVATOR_WALL_TYPE_SOUTH=3",
        description: "",

    },
    bj_ELEVATOR_WALL_TYPE_WEST: {
        completion: "constant integer bj_ELEVATOR_WALL_TYPE_WEST=4",
        description: "",

    },
    bj_HASHTABLE_BOOLEAN: {
        completion: "constant integer bj_HASHTABLE_BOOLEAN = 0",
        description: "",

    },
    bj_HASHTABLE_HANDLE: {
        completion: "constant integer bj_HASHTABLE_HANDLE = 4",
        description: "",

    },
    bj_HASHTABLE_INTEGER: {
        completion: "constant integer bj_HASHTABLE_INTEGER = 1",
        description: "",

    },
    bj_HASHTABLE_REAL: {
        completion: "constant integer bj_HASHTABLE_REAL = 2",
        description: "",

    },
    bj_HASHTABLE_STRING: {
        completion: "constant integer bj_HASHTABLE_STRING = 3",
        description: "",

    },
};

exports.keywords = {
    globals: { description: "" },
    endglobals: { description: "" },
    library: { description: "" },
    endlibrary: { description: "" },
    struct: { description: "" },
    endstruct: { description: "" },
    scope: { description: "" },
    endscope: { description: "" },
    method: { description: "" },
    endmethod: { description: "" },
    interface: { description: "" },
    endinterface: { description: "" },
    function: { description: "" },
    endfunction: { description: "" },
    loop: { description: "" },
    endloop: { description: "" },
    if: { description: "" }, 
    then: { description: "" },
    else: { description: "" },
    elseif: { description: "" },
    endif: { description: "" },
    exitwhen: { description: "" },
    native: { description: "" },
    takes: { description: "" },
    returns: { description: "" },
    return: { description: "" },
    local: { description: "" },
    call: { description: "" },
    set: { description: "" },
    true: { description: "" },
    false: { description: "" },
    null: { description: "" },
    array: { description: "" },
    extends: { description: "" },
    type: { description: "" },
    constant: { description: "" },
    and: { description: "" },
    or: { description: "" },
    not: { description: "" },
    requires: { description: "" },
    needs: { description: "" },
    uses: { description: "" },
    initializer: { description: "" },
    public: { description: "" },
    private: { description: "" },
    static: { description: "" },
    defaults: { description: "" },
    operator: { description: "" },
    debug: { description: "" },
    hashtable: { description: "" },integer: { description: "" },real: { description: "" },boolean: { description: "" },string: { description: "" },handle: { description: "" },agent: { description: "" },event: { description: "" },player: { description: "" },widget: { description: "" },unit: { description: "" },destructable: { description: "" },item: { description: "" },ability: { description: "" },buff: { description: "" },force: { description: "" },group: { description: "" },trigger: { description: "" },triggercondition: { description: "" },triggeraction: { description: "" },timer: { description: "" },location: { description: "" },region: { description: "" },rect: { description: "" },boolexpr: { description: "" },sound: { description: "" },conditionfunc: { description: "" },filterfunc: { description: "" },unitpool: { description: "" },itempool: { description: "" },race: { description: "" },alliancetype: { description: "" },racepreference: { description: "" },gamestate: { description: "" },igamestate: { description: "" },fgamestate: { description: "" },playerstate: { description: "" },playerscore: { description: "" },playergameresult: { description: "" },unitstate: { description: "" },aidifficulty: { description: "" },eventid: { description: "" },gameevent: { description: "" },playerevent: { description: "" },playerunitevent: { description: "" },unitevent: { description: "" },limitop: { description: "" },widgetevent: { description: "" },dialogevent: { description: "" },unittype: { description: "" },gamespeed: { description: "" },gamedifficulty: { description: "" },gametype: { description: "" },mapflag: { description: "" },mapvisibility: { description: "" },mapsetting: { description: "" },mapdensity: { description: "" },mapcontrol: { description: "" },playerslotstate: { description: "" },volumegroup: { description: "" },camerafield: { description: "" },camerasetup: { description: "" },playercolor: { description: "" },placement: { description: "" },startlocprio: { description: "" },raritycontrol: { description: "" },blendmode: { description: "" },texmapflags: { description: "" },effect: { description: "" },effecttype: { description: "" },weathereffect: { description: "" },terraindeformation: { description: "" },fogstate: { description: "" },fogmodifier: { description: "" },dialog: { description: "" },button: { description: "" },quest: { description: "" },questitem: { description: "" },defeatcondition: { description: "" },timerdialog: { description: "" },leaderboard: { description: "" },multiboard: { description: "" },multiboarditem: { description: "" },trackable: { description: "" },gamecache: { description: "" },version: { description: "" },itemtype: { description: "" },texttag: { description: "" },attacktype: { description: "" },damagetype: { description: "" },weapontype: { description: "" },soundtype: { description: "" },lightning: { description: "" },pathingtype: { description: "" },image: { description: "" },ubersplat: { description: "" },nothing: { description: "" },
}

exports.vjfunctions = {
    create: {
        description: "Struct.create()"
    },
    allocate: {
        description: "Struct.allocate()"
    },
    destroy: {
        description: "Struct.destroy()"
    },
    execute: {
        description: "function.execute()"
    },
    evaluate: {
        description: "function.evaluate()"
    },
}

exports.japifunctions = {
    EXSetUnitFacing: {
        completion: "native EXSetUnitFacing takes unit u, real angle returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'u', documentation: "" },
            { label: 'real', name: 'angle', documentation: "" }
        ]
    },
    EXPauseUnit: {
        completion: "native EXPauseUnit takes unit u, boolean flag returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'u', documentation: "" },
            { label: 'boolean', name: 'flag', documentation: "" },
        ]
    },
    EXSetUnitCollisionType: {
        completion: "native EXSetUnitCollisionType takes boolean enable, unit u, integer t returns nothing",
        description: "",
        parameters: [
            { label: 'boolean', name: 'enable', documentation: "" },
            { label: 'unit', name: 'u', documentation: "" },
            { label: 'integer', name: 't', documentation: ""},
        ]
    },
    EXSetUnitMoveType: {
        completion: "native EXSetUnitMoveType takes unit u, integer t returns nothing",
        description: "",
        parameters: [
            { label: 'unit', name: 'u', documentation: "" },
            { label: 'integer', name: 't', documentation: ""},
        ]
    },
    EXExecuteScript: {
        completion: "native EXExecuteScript     takes string script returns string",
        description: "",
        parameters: [
            { label: 'string', name: 'script', documentation: "" },
        ]
    },
    EXGetEffectX: {
        completion: "native EXGetEffectX takes effect e returns real",
        description: "",
        parameters: [
            { label: 'effect', name: 'e', documentation: ""},
        ]
    },
    EXGetEffectY: {
        completion: "native EXGetEffectY takes effect e returns real",
        description: "",
        parameters: [
            { label: 'effect', name: 'e', documentation: ""},
        ]
    },
    EXGetEffectZ: {
        completion: "native EXGetEffectZ takes effect e returns real",
        description: "",
        parameters: [
            { label: 'effect', name: 'e', documentation: ""},
        ]
    },
    EXSetEffectXY: {
        completion: "native EXSetEffectXY takes effect e, real x, real y returns nothing",
        description: "",
        parameters: [ 
            { label: 'effect', name: 'e', documentation: "" },
            { label: 'real', name: 'x', documentation: "" },
            { label: 'real', name: 'y', documentation: "" },
        ]
    },
    EXSetEffectZ: {
        completion: "native EXSetEffectZ takes effect e, real z returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'e', documentation: "" },
            { label: 'real', name: 'z', documentation: "" },
        ]
    },
    EXGetEffectSize: {
        completion: "native EXGetEffectSize takes effect e returns real",
        description: "",
        parameters: [
            { label: 'effect', name: 'e', documentation: "" },
        ]
    },
    EXSetEffectSize: {
        completion: "native EXSetEffectSize takes effect e, real size returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'e', documentation: "" },
            { label: 'real', name: 'size', documentation: "" },
        ]
    },
    EXEffectMatRotateX: {
        completion: "native EXEffectMatRotateX takes effect e, real angle returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'e', documentation: "" },
            { label: 'real', name: 'angle', documentation: "" },
        ]
    },
    EXEffectMatRotateY: {
        completion: "native EXEffectMatRotateY takes effect e, real angle returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'e', documentation: "" },
            { label: 'real', name: 'angle', documentation: "" },
        ]
    },
    EXEffectMatRotateZ: {
        completion: "native EXEffectMatRotateZ takes effect e, real angle returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'e', documentation: "" },
            { label: 'real', name: 'angle', documentation: "" },
        ]
    },
    EXEffectMatScale: {
        completion: "native EXEffectMatScale takes effect e, real x, real y, real z returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'e', documentation: "" },
            { label: 'real', name: 'x', documentation: "" },
            { label: 'real', name: 'y', documentation: "" },
            { label: 'real', name: 'z', documentation: "" },
        ]
    },
    EXEffectMatReset: {
        completion: "native EXEffectMatReset takes effect e returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'e', documentation: "" },
        ]
    },
    EXSetEffectSpeed: {
        completion: "native EXSetEffectSpeed takes effect e, real speed returns nothing",
        description: "",
        parameters: [
            { label: 'effect', name: 'e', documentation: "" },
            { label: 'real', name: 'speed', documentation: "" },
        ]
    },
    EXGetEventDamageData: {
        completion: "native EXGetEventDamageData takes integer edd_type returns integer",
        description: "",
        parameters: [
            { label: 'integer', name: 'edd_type', documentation: "" },
        ]
    },
    EXSetEventDamage: {
        completion: "native EXSetEventDamage takes real amount returns boolean",
        description: "",
        parameters: [
            { label: 'real', name: 'amount', documentation: "" },
        ]
    },
    EXGetUnitAbility: {
        completion: "native EXGetUnitAbility        takes unit u, integer abilcode returns ability",
        description: "",
        parameters:[
            { label: 'unit', name: 'u', documentation: "" },
            { label: 'integer', name: 'abilcode', documentation: "" },
        ]
    },
    EXGetUnitAbilityByIndex: {
        completion: "native EXGetUnitAbilityByIndex takes unit u, integer index returns ability",
        description: "",
        parameters: [
            { label: 'unit', name: 'u', documentation: "" },
            { label: 'integer', name: 'index', documentation: "" },
        ]
    },
    EXGetAbilityId: {
        completion: "native EXGetAbilityId          takes ability abil returns integer",
        description: "",
        parameters: [
            { label: 'ability', name: 'abil' },
        ]
    },
    EXGetAbilityState: {
        completion: "native EXGetAbilityState       takes ability abil, integer state_type returns real",
        description: "",
        parameters: [
            { label: 'ability', name: 'abil', documentation: "" },
            { label: 'integer', name: 'state_type', documentation: "" },
        ]
    },
    EXSetAbilityState: {
        completion: "native EXSetAbilityState       takes ability abil, integer state_type, real value returns boolean",
        description: "",
        parameters: [
            { label: 'ability', name: 'abil', documentation: "" },
            { label: 'integer', name: 'state_type', documentation: "" },
            { label: 'real', name: 'value', documentation: "" },
        ]
    },
    EXGetAbilityDataReal: {
        completion: "native EXGetAbilityDataReal    takes ability abil, integer level, integer data_type returns real",
        description: "",
        parameters: [
            { label: 'ability', name: 'abil', documentation: "" },
            { label: 'integer', name: 'level', documentation: "" },
            { label: 'integer', name: 'data_type', documentation: "" },
        ]
    },
    EXSetAbilityDataReal: {
        completion: "native EXSetAbilityDataReal    takes ability abil, integer level, integer data_type, real value returns boolean",
        description: "",
        parameters: [
            { label: 'ability', name: 'abil', documentation: "" },
            { label: 'integer', name: 'level', documentation: "" },
            { label: 'integer', name: 'data_type', documentation: "" },
            { label: 'real', name: 'value', documentation: "" },
        ]
    },
    EXGetAbilityDataInteger: {
        completion: "native EXGetAbilityDataInteger takes ability abil, integer level, integer data_type returns integer",
        description: "",
        parameters: [
            { label: 'ability', name: 'abil', documentation: "" },
            { label: 'integer', name: 'level', documentation: "" },
            { label: 'integer', name: 'data_type', documentation: "" },
        ]
    },
    EXSetAbilityDataInteger: {
        completion: "native EXSetAbilityDataInteger takes ability abil, integer level, integer data_type, integer value returns boolean",
        description: "",
        parameters: [
            { label: 'ability', name: 'abil', documentation: "" },
            { label: 'integer', name: 'level', documentation: "" },
            { label: 'integer', name: 'data_type', documentation: "" },
            { label: 'integer', name: 'value', documentation: "" },
        ]
    },
    EXGetAbilityDataString: {
        completion: "native EXGetAbilityDataString  takes ability abil, integer level, integer data_type returns string",
        description: "",
        parameters: [
            { label: 'ability', name: 'abil', documentation: "" },
            { label: 'integer', name: 'level', documentation: "" },
            { label: 'integer', name: 'data_type', documentation: "" },
        ]
    },
    EXSetAbilityDataString: {
        completion: "native EXSetAbilityDataString  takes ability abil, integer level, integer data_type, string value returns boolean",
        description: "",
        parameters: [
            { label: 'ability', name: 'abil', documentation: "" },
            { label: 'integer', name: 'level', documentation: "" },
            { label: 'integer', name: 'data_type', documentation: "" },
            { label: 'string', name: 'value', documentation: "" },
        ]
    },
}
