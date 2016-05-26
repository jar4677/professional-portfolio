<div class="jumbotron">
    <h1><span class="glyphicon glyphicon-signal"></span> {{ pageName }}</h1>
    <figure>
        <img ng-src="{{ mainImage }}" class="img-circle">
        <figcaption>
            <h3>{{ caption }}</h3>
        </figcaption>
    </figure>
</div>

<main>
    <div class=" col-sm-6 col-xs-12">
        <h1>Experience</h1>
        <h3>My Professional Experience</h3>
        <div class="panel-group" id="accordion">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#job_1">Job 1</a>
                    </h4>
                </div>
                <div class="panel-collapse collapse" id="job_1">
                    <ul class="list-group">
                        <li class="list-group-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut
                            consequatur cumque doloribus omnis unde.
                        </li>
                        <li class="list-group-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                            cumque ducimus hic libero officiis quidem!
                        </li>
                        <li class="list-group-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
                            mollitia neque optio quo sapiente vitae.
                        </li>
                    </ul>
                </div>
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#job_2">Job 2</a>
                    </h4>
                </div>
                <div class="panel-collapse collapse" id="job_2">
                    <ul class="list-group">
                        <li class="list-group-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                            aut in minima perferendis quam quas.
                        </li>
                        <li class="list-group-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
                            deleniti earum officia porro quam reiciendis!
                        </li>
                        <li class="list-group-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                            accusantium architecto ex illo placeat quam.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</main>
