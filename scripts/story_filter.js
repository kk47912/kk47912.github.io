function check_storyfilter() {
    if ($.cookie('chk_stage0') != null) {
        $(".stage0").show();
        $(".stage0.then_hide").hide();
    } else {
        $(".stage0").hide();
        $(".stage0.then_hide").show();
    }
    if ($.cookie('chk_stage1') != null) {
        $(".stage1").show();
        $(".stage1.then_hide").hide();
    } else {
        $(".stage1").hide();
        $(".stage1.then_hide").show();
    }
    if ($.cookie('chk_stage2') != null) {
        $(".stage2").show();
        $(".stage2.then_hide").hide();
    } else {
        $(".stage2").hide();
        $(".stage2.then_hide").show();
    }
    if ($.cookie('chk_stage3') != null) {
        $(".stage3").show();
        $(".stage3.then_hide").hide();
    } else {
        $(".stage3").hide();
        $(".stage3.then_hide").show();
    }
    if ($.cookie('chk_stage4') != null) {
        $(".stage4").show();
        $(".stage4.then_hide").hide();
    } else {
        $(".stage4").hide();
        $(".stage4.then_hide").show();
    }
    if ($.cookie('chk_stage5') != null) {
        $(".stage5").show();
        $(".stage5.then_hide").hide();
    } else {
        $(".stage5").hide();
        $(".stage5.then_hide").show();
    }
    if ($.cookie('chk_stageE1') != null) {
        $(".stageE1").show();
        $(".stageE1.then_hide").hide();
    } else {
        $(".stageE1").hide();
        $(".stageE1.then_hide").show();
    }
    if ($.cookie('chk_stage6') != null) {
        $(".stage6").show();
        $(".stage6.then_hide").hide();
    } else {
        $(".stage6").hide();
        $(".stage6.then_hide").show();
    }
    if ($.cookie('chk_stage0') == null &&
        $.cookie('chk_stage1') == null &&
        $.cookie('chk_stage2') == null &&
        $.cookie('chk_stage3') == null &&
        $.cookie('chk_stage4') == null &&
        $.cookie('chk_stage5') == null &&
        $.cookie('chk_stageE1') == null &&
        $.cookie('chk_stage6') == null) {
        $(".none").show();
    } else {
        $(".none").hide();
    }
}
check_storyfilter();