import React from 'react'
import './Banner.css';
import bannerbg from "../Assets/banner-bg.jpeg";
import bannerimg from "../Assets/banner-img.jpeg";
const Banner = () => {
    window.addEventListener('scroll', reveal);
    function reveal() {
        var reveals = document.querySelectorAll('.reveal');
        for (var i = 0; i < reveals.length; i++) {
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;


            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('ractive');
            }
            else {
                reveals[i].classList.remove('ractive');
            }
        }
    }
    return (
        <div id='main-banner'>
            <div id='banner-text' >
                <div id='about' className='about-text reveal' >
                    About <br></br>
                    Us
                </div>
                <div id='about-desc' className='aboutdesc-text reveal' >

                    <p>The biggest cultural club of the institute which provides a platform to the students to explore all the areas of dramatics like stage plays, street plays, mono-acts and mimes.
                    </p>
                    <p>
                        Apart from acting we also work on areas like scripting, music, instruments etc. which is an integral part of drama.
                    </p>
                </div>
                <div id='special' className='special reveal'> We have something to offer to everybody and this is the reason our family keeps growing every year and we attain new heights.</div>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac eleifend justo, in malesuada velit. Morbi ut mi aliquam, convallis nulla id, ornare sem. Aliquam viverra nibh porta feugiat laoreet. Ut auctor in neque sit amet suscipit. Nunc diam ex, mattis in urna non, dignissim sodales lorem. Fusce nec ex tincidunt, dapibus massa ut, pellentesque velit. Sed ante erat, volutpat et interdum eget, vehicula vehicula lacus. Proin sollicitudin varius metus, sit amet pretium diam ornare accumsan. Integer tincidunt tincidunt eros, quis sodales risus interdum id. Nulla ac enim risus. Vestibulum quis ornare risus. Cras vitae sollicitudin justo. Suspendisse venenatis sem in ante egestas dictum.

            Vestibulum nibh metus, varius sed lectus id, fermentum ornare tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa lorem, euismod vitae odio eu, bibendum porttitor nisi. Phasellus pharetra dictum leo, nec finibus ipsum gravida sed. Etiam accumsan scelerisque sem in rutrum. Nullam fringilla ligula iaculis mauris maximus, scelerisque cursus lectus vulputate. Cras quis congue diam, et imperdiet lectus. Vestibulum lacus mauris, maximus in est quis, semper vestibulum neque. Quisque luctus condimentum ultricies. Suspendisse potenti. Ut nec laoreet augue. Curabitur mauris augue, finibus quis sollicitudin in, consequat ac velit. Vestibulum at efficitur orci. Praesent luctus blandit magna. Quisque in varius libero. Integer sed massa id odio tempor euismod.

            Mauris malesuada congue felis, nec laoreet metus blandit non. Nullam sit amet viverra velit. Nunc auctor, erat eget sollicitudin ultrices, diam odio accumsan dui, quis aliquet libero ex sit amet velit. Curabitur luctus eget magna vel tristique. Mauris posuere enim sagittis ipsum venenatis cursus. Donec maximus suscipit felis eu feugiat. In eu turpis scelerisque, vestibulum dolor vulputate, malesuada nisl. Duis maximus, ex non euismod consectetur, nisi nisi molestie justo, a sagittis metus ex a turpis. Quisque eros lorem, tincidunt vel est nec, iaculis scelerisque nulla. Proin id mattis metus, eget scelerisque ligula. Cras ut dictum enim, eu aliquam ex. Fusce pellentesque, justo eget mollis sollicitudin, neque metus imperdiet leo, non posuere turpis sem nec quam.

            Suspendisse condimentum enim non diam tristique, nec gravida lectus scelerisque. Phasellus vel bibendum neque. Proin ut nulla a lorem finibus mollis. Aliquam lobortis neque velit, vitae bibendum tortor fringilla sit amet. Etiam eleifend turpis at nibh consectetur ornare ut blandit enim. Vivamus dictum tempus velit, eget malesuada sem tincidunt blandit. Quisque id leo dolor. Mauris aliquet porttitor nunc, vitae congue lorem vehicula at. Integer rutrum, lorem sed suscipit imperdiet, mauris augue vulputate ligula, a convallis mi nulla non dui. Aliquam ornare sagittis mi eu pharetra. Maecenas bibendum arcu non odio vehicula commodo. Donec convallis ut lacus sed dapibus. Curabitur euismod ligula justo, sit amet fermentum velit porta molestie. Mauris nec maximus lacus, nec vehicula massa. Maecenas luctus ut magna vitae semper.

            Suspendisse semper commodo odio id luctus. Vivamus tempus tellus a arcu pellentesque, sit amet volutpat orci placerat. Suspendisse ex lacus, ullamcorper tempor elementum non, laoreet eget sem. Ut non ornare elit, a tincidunt justo. Vestibulum in lacinia ipsum. Integer tincidunt porttitor neque, et pharetra ex. Cras pharetra ullamcorper sem nec porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent luctus mi ac suscipit rutrum. Integer viverra risus a maximus venenatis. Nunc vel nibh ut arcu pulvinar fringilla. Aliquam vitae imperdiet nisl, id facilisis ante. Suspendisse a ipsum in sapien accumsan posuere nec id urna. Vestibulum condimentum auctor ligula, feugiat facilisis odio maximus vel. Donec vel mauris et erat feugiat pretium placerat ac tortor. Aenean sed metus cursus, pellentesque nisi et, blandit orci.
        </div>
    )
}

export default Banner
