function check_storyfilter() {
    if ($.cookie('chk_stage0') != null) {
        $(".stage0").show();
    } else {
        $(".stage0").hide();
    }
    if ($.cookie('chk_stage1') != null) {
        $(".stage1").show();
    } else {
        $(".stage1").hide();
    }
    if ($.cookie('chk_stage2') != null) {
        $(".stage2").show();
    } else {
        $(".stage2").hide();
    }
    if ($.cookie('chk_stage3') != null) {
        $(".stage3").show();
    } else {
        $(".stage3").hide();
    }
    if ($.cookie('chk_stage4') != null) {
        $(".stage4").show();
    } else {
        $(".stage4").hide();
    }
    if ($.cookie('chk_stage5') != null) {
        $(".stage5").show();
    } else {
        $(".stage5").hide();
    }
    if ($.cookie('chk_stageE1') != null) {
        $(".stageE1").show();
    } else {
        $(".stageE1").hide();
    }
    if ($.cookie('chk_stage6') != null) {
        $(".stage6").show();
    } else {
        $(".stage6").hide();
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