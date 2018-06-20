$(document).ready(function () {
    var iframeready = 0; //iframe 로드 상태
    //모바일메뉴 [스토리라인]항목 크기 할당
    $("#mobile_list_story > ul").css('height', $("#view_menu").height() - $("#view_menu_1").height() - $("#view_menu_2").height() - $("#mobile_list_story > span").height() - 70 + "px");

    //메뉴 [스토리라인]항목 접기/펼치기
    $("#list_story > span").click(function () {
        if ($("#list_story").hasClass("open")) {
            $("#list_story").removeClass("open");
        } else {
            $("#list_story").addClass("open");
        }
    });

    //모바일메뉴 [스토리라인]항목 접기/펼치기
    $("#mobile_list_story > span").click(function () {
        if ($("#mobile_list_story").hasClass("open")) {
            $("#mobile_list_story").removeClass("open");
        } else {
            $("#mobile_list_story").addClass("open");
        }
    });

    //모바일메뉴 열기
    $("#bt_menu > img").click(function () {
        $("#view_menu, .page_cover, html").addClass("open");
    });

    //모바일메뉴 닫기
    function func_CloseMenu() {
        $("#view_menu, .page_cover, html").removeClass("open");
    }
    call_func_CloseMenu = func_CloseMenu;

    //iframe크기조절
    function func_resizeFrame() {
        document.getElementById('id_mainframe').contentWindow.check_storyfilter(); //텍스트필터 적용  
        if (window.matchMedia('screen and (min-width:800px) and (orientation:landscape)').matches) {
            $("#view_menu, .page_cover, html").removeClass("open");
            $("#id_mainframe").contents().find('html').removeClass("mobile"); //자식프레임에게도 동일한 조건의 미디어쿼리 적용
        } else {
            $("#id_mainframe").contents().find('html').addClass("mobile");
        }

        try {
            $("#id_mainframe").height($("#id_mainframe").contents().find('body')[0].offsetHeight + 60); //리사이징
        } catch (e) {
            console.error("error occurred : " + e);
        }
        iframeready = 1;
    }
    call_func_resizeFrame = func_resizeFrame;

    //스토리 표시현황 체크
    {
        $("input[name=stage0]").change(function () {
            if ($(this).prop("checked")) {
                alert("제0장 체크");
                $("input[name=stage0]").prop("checked", true);
                $.cookie('chk_stage0', '1', { expires: 765, path: '/' });
            } else {
                alert("제0장 체크해제");
                $("input[name=stage0]").prop("checked", false);
                $.removeCookie('chk_stage0', { path: '/' })
            }
            check_storyfilter();
        });
        $("input[name=stage1]").change(function () {
            if ($(this).prop("checked")) {
                alert("제1장 체크");
                $("input[name=stage1]").prop("checked", true);
                $.cookie('chk_stage1', '1', { expires: 765, path: '/' });
            } else {
                alert("제1장 체크해제");
                $("input[name=stage1]").prop("checked", false);
                $.removeCookie('chk_stage1', { path: '/' })
            }
            check_storyfilter();
        });
        $("input[name=stage2]").change(function () {
            if ($(this).prop("checked")) {
                alert("제2장 체크");
                $("input[name=stage2]").prop("checked", true);
                $.cookie('chk_stage2', '1', { expires: 765, path: '/' });
            } else {
                alert("제2장 체크해제");
                $("input[name=stage2]").prop("checked", false);
                $.removeCookie('chk_stage2', { path: '/' })
            }
            check_storyfilter();
        });
        $("input[name=stage3]").change(function () {
            if ($(this).prop("checked")) {
                alert("제3장 체크");
                $("input[name=stage3]").prop("checked", true);
                $.cookie('chk_stage3', '1', { expires: 765, path: '/' });
            } else {
                alert("제3장 체크해제");
                $("input[name=stage3]").prop("checked", false);
                $.removeCookie('chk_stage3', { path: '/' })
            }
            check_storyfilter();
        });
        $("input[name=stage4]").change(function () {
            if ($(this).prop("checked")) {
                alert("<제4장 내용표시>\n변경점 : 제0전역 개방");
                $("input[name=stage4]").prop("checked", true);
                $.cookie('chk_stage4', '1', { expires: 765, path: '/' });
            } else {
                alert("제4장의 내용을 숨깁니다.");
                $("input[name=stage4]").prop("checked", false);
                $.removeCookie('chk_stage4', { path: '/' });
            }
            check_storyfilter();
        });
        $("input[name=stage5]").change(function () {
            if ($(this).prop("checked")) {
                alert("제5장 체크");
                $("input[name=stage5]").prop("checked", true);
                $.cookie('chk_stage5', '1', { expires: 765, path: '/' });
            } else {
                alert("제5장 체크해제");
                $("input[name=stage5]").prop("checked", false);
                $.removeCookie('chk_stage5', { path: '/' })
            }
            check_storyfilter();
        });
        $("input[name=stageE1]").change(function () {
            if ($(this).prop("checked")) {
                alert("이벤트 : 큐브작전 체크");
                $("input[name=stageE1]").prop("checked", true);
                $.cookie('chk_stageE1', '1', { expires: 765, path: '/' });
            } else {
                alert("이벤트 : 큐브작전 체크해제");
                $("input[name=stageE1]").prop("checked", false);
                $.removeCookie('chk_stageE1', { path: '/' })
            }
            check_storyfilter();
        });
        $("input[name=stage6]").change(function () {
            if ($(this).prop("checked")) {
                alert("제6장 체크");
                $("input[name=stage6]").prop("checked", true);
                $.cookie('chk_stage6', '1', { expires: 765, path: '/' });
            } else {
                alert("제6장 체크해제");
                $("input[name=stage6]").prop("checked", false);
                $.removeCookie('chk_stage6', { path: '/' })
            }
            check_storyfilter();
        });
    }
    function check_storyfilter() {
        if ($.cookie('chk_stage0') != null) {
            $("input[name=stage0]").prop("checked", true);
        } else {
            $("input[name=stage0]").prop("checked", false);
        }
        if ($.cookie('chk_stage1') != null) {
            $("input[name=stage1]").prop("checked", true);
        } else {
            $("input[name=stage1]").prop("checked", false);
        }
        if ($.cookie('chk_stage2') != null) {
            $("input[name=stage2]").prop("checked", true);
        } else {
            $("input[name=stage2]").prop("checked", false);
        }
        if ($.cookie('chk_stage3') != null) {
            $("input[name=stage3]").prop("checked", true);
        } else {
            $("input[name=stage3]").prop("checked", false);
        }
        if ($.cookie('chk_stage4') != null) {
            $("input[name=stage4]").prop("checked", true);
            $("#list_story li:nth-child(1) span").html("제0장");
            $("#mobile_list_story li:nth-child(1) span").html("제0장");
            $("#list_story li:nth-child(1) a").attr("href", "./storyline/stage0.html");
            $("#mobile_list_story li:nth-child(1) div").attr("onclick", "Mainframe.location.href='./storyline/stage0.html'");
            $("input[name=stage0]").show();
        } else {
            $("input[name=stage4]").prop("checked", false);
            $("#list_story li:nth-child(1) span").html("프롤로그");
            $("#mobile_list_story li:nth-child(1) span").html("프롤로그");
            $("#list_story li:nth-child(1) a").attr("href", "./storyline/Prologue.html");
            $("#mobile_list_story li:nth-child(1) div").attr("onclick", "Mainframe.location.href='./storyline/Prologue.html'");
            $("input[name=stage0]").hide();
        }
        if ($.cookie('chk_stage5') != null) {
            $("input[name=stage5]").prop("checked", true);
        } else {
            $("input[name=stage5]").prop("checked", false);
        }
        if ($.cookie('chk_stageE1') != null) {
            $("input[name=stageE1]").prop("checked", true);
        } else {
            $("input[name=stageE1]").prop("checked", false);
        }
        if ($.cookie('chk_stage6') != null) {
            $("input[name=stage6]").prop("checked", true);
        } else {
            $("input[name=stage6]").prop("checked", false);
        }
        if (iframeready == 1) {
            func_resizeFrame();
        }
    }
    check_storyfilter();
});
function callfunction(func_name) {
    if (func_name == 'call_func_CloseMenu') call_func_CloseMenu();
    if (func_name == 'call_func_resizeFrame') {
        /*var loc = document.getElementById("id_mainframe").contentWindow.location.href;
        if (loc.match('/Home.html')) {
            alert("!!!");
        }*/ //미사용, 아이디어 보존용으로 과제 마감후 개인적으로 사용할 수도 있음.
        //프레임의 현재 주소에 따라 메뉴의 표시가 달라지는 기능(구상).
        call_func_resizeFrame();
    }
}
$(window).resize(function () {
    $("#mobile_list_story > ul").css('height', $("#view_menu").height() - $("#view_menu_1").height() - $("#view_menu_2").height() - $("#mobile_list_story > span").height() - 70 + "px");
    callfunction('call_func_resizeFrame');
});