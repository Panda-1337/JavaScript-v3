UI.AddSliderInt('FAKE', -100, 100);
UI.AddSliderInt('FAKEA', -100, 100);
UI.AddSliderInt('REAL', -100, 100);
UI.AddSliderInt('REALA', -100, 100);
var a;
function change_aa(){
	AntiAim.SetOverride(1);
	a=UI.GetValue("MISC", "JAVASCRIPT", "Script items", "FAKE");
	b=UI.GetValue("MISC", "JAVASCRIPT", "Script items", "REAL");
	d=UI.GetValue("MISC", "JAVASCRIPT", "Script items", "FAKEA");
	e=UI.GetValue("MISC", "JAVASCRIPT", "Script items", "REALA");
	AntiAim.SetFakeOffset(g(a,d))
	AntiAim.SetRealOffset(g(b,e));
}
function g(min, max) {
    
	min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
Cheat.RegisterCallback('CreateMove', 'change_aa');
